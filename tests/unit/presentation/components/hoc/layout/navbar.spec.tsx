import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { NextRouter, useRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Navbar } from '@clean/presentation/components/hoc'
import { createMockRouter } from '@tests/unit/presentation/helpers'

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

  test('Should go to login page on login button clicked', async () => {
    const { router } = makeSut()

    const button = screen.getByTestId('signin-button')
    fireEvent.click(button)
    expect(router.push).toHaveBeenCalledWith('/accounts/login')
  })
})
