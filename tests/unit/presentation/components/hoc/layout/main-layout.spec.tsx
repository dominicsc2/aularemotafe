import React from 'react'
import { Layout } from '@clean/presentation/components/hoc'
import { render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from '@tests/unit/presentation/helpers'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

window.scrollTo = jest.fn()

const Dummy: React.FC = () => <h1 data-testid="dummy">This is a test</h1>

const makeSut = (): void => {
  const router = createMockRouter({})

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: null
  })

  render(
    <ApolloProvider client={client}>
      <RouterContext.Provider value={router}>
        <Layout>
          <Dummy />
        </Layout>
      </RouterContext.Provider>
    </ApolloProvider>
  )
}

describe('Layout component', () => {
  test('Should render children correctly', () => {
    makeSut()
    expect(screen.getByTestId('dummy')).toBeInTheDocument()
  })
})
