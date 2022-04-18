import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Navbar } from '@clean/presentation/components/hoc'
import faker from '@faker-js/faker'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMockRouter } from '@tests/unit/presentation/helpers'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import React from 'react'

jest.mock('React', () => ({
  ...(jest.requireActual('React') as any),
  useEffect: jest.fn()
}))

type SutTypes = {
  router: NextRouter
}

const makeSut = (pathname: string = '/'): SutTypes => {
  const router = createMockRouter({ pathname })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: null
  })

  render(
    <ApolloProvider client={client}>
      <RouterContext.Provider value={router}>
        <Navbar>
          <div data-testid="child"></div>
        </Navbar>
      </RouterContext.Provider>
    </ApolloProvider>
  )

  return {
    router
  }
}

describe('Navbar component', () => {
  test('Should go to signup page on register button clicked', () => {
    const { router } = makeSut()

    const button = screen.getByTestId('signup-button')
    fireEvent.click(button)
    expect(router.push).toHaveBeenCalledWith('/accounts/signup')
  })

  test('Should go to login page on login button clicked', () => {
    const { router } = makeSut()

    const button = screen.getByTestId('signin-button')
    fireEvent.click(button)
    expect(router.push).toHaveBeenCalledWith('/accounts/login')
  })

  test('Should start with header 50px margin top on initial state', () => {
    makeSut()
    expect(screen.getByTestId('header-container').classList.length).toBe(2)
    expect(screen.getByTestId('header-container').className).toBe('container move')
  })

  test('Should not display DropableModal on initial state', () => {
    makeSut()
    expect(screen.queryByTestId('dropable-modal')).not.toBeInTheDocument()
  })

  test('Should render authentication button on initial state', () => {
    makeSut()
    expect(screen.queryByTestId('signin-button')).toBeInTheDocument()
    expect(screen.queryByTestId('signup-button')).toBeInTheDocument()
  })

  test('Should close offer when close offer button is clicked', () => {
    makeSut()
    const closeOfferBtn = screen.getByTestId('close-offer')
    fireEvent.click(closeOfferBtn)
    expect(screen.queryByTestId('offer-wrap').style.display).toBe('none')
    expect(screen.getByTestId('header-container').className).toBe('container')
  })

  test('Should render BannerContent if url is correct', () => {
    makeSut(faker.random.arrayElement(['/', '/instructor', '/instructor-welcome', '/main']))
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  test('Should not render BannerContent if url is not correct', () => {
    makeSut(faker.random.word())
    expect(screen.queryByTestId('child')).not.toBeInTheDocument()
  })
})
