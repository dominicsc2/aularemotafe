import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  createHttpLink,
  InMemoryCache,
  Operation
} from '@apollo/client'
import { makeRefreshToken } from '@clean/main/usecases'
import '@clean/presentation/assets/scss/styles.scss'
import PageWithLayoutType from '@clean/presentation/components/hoc/layout/types/page-with-layout-type'
import { getAccessToken, setAccessToken } from '@clean/presentation/store'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const [loading, setLoading] = useState(true)

  const Layout = Component.layout || ((children: any) => <>{children}</>)

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: 'include' // if backend is in a different origin than the client
  })

  const authMiddleware = new ApolloLink((operation, forward) => { // perform this on every server request
    
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => {
      const accessToken = getAccessToken() // we store accessToken in a variable, after every page refresh we lose it

      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
      }
    })

    return forward(operation)
  })

  const link = new TokenRefreshLink({
    // seemlessly auto refresh accesstoken when it has expired so that user is never logged out
    accessTokenField: 'result',
    isTokenValidOrUndefined: (_): boolean => {
      const accessTokenStore = getAccessToken()

      if (!accessTokenStore) return true

      try {
        const { exp } = jwtDecode(accessTokenStore) as { exp: number } // extend the d.ts
        if (Date.now() >= exp * 1000) {
          return false
        }
        return true
      } catch (error) {
        return false
      }
    },
    fetchAccessToken: (): Promise<Response> => {
      // activates when isTokenValidOrUndefined returns false
      return fetch('http://localhost:4000/api/refresh_tokens', { credentials: 'include' })
    },
    handleFetch: ({ accessToken }: any, _): void => {
      // executes after fetchAccessToken is called
      setAccessToken(accessToken)
    },
    handleError: (err: Error, operation: Operation): void => {
      console.warn('Your refresh token is invalid. Try to relogin')
      console.error(err)
    }
  })

  // every time the page is reloaded fetch a new access token with your refresh token stored in a cookie

  useEffect(() => {
    makeRefreshToken()
      .refreshTokens()
      .then(response => {
        console.log(response.result.accessToken)
        setAccessToken(response.result.accessToken)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(link.concat(authMiddleware), httpLink) // first refresh token, then send http request (respect order)
  })

  if (loading) {
    return <div>Loading...</div>
  }

  // ApolloProvider wraps NextPage and places ApolloClient on the context

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
