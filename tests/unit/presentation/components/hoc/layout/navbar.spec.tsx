import { Navbar } from '@clean/presentation/components/hoc'
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
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

const makeSut = (): SutTypes => {
  const router = createMockRouter({})
  render(
    <RouterContext.Provider value={router}>
      <Navbar>
        <div></div>
      </Navbar>
    </RouterContext.Provider>
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

  test('Should close offer when close offer button is clicked', async () => {
    makeSut()
    const closeOfferBtn = screen.getByTestId('close-offer')
    fireEvent.click(closeOfferBtn)
    expect(screen.queryByTestId('offer-wrap').style.display).toBe('none')
    expect(screen.getByTestId('header-container').className).toBe('container')
  })
})
