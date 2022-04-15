import { Navbar } from '@clean/presentation/components/hoc'
import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import React from 'react'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

jest.mock('React', () => ({
  ...jest.requireActual('React') as any,
  useEffect: jest.fn()
}))

const makeSut = (): void => {
  render(
    <Navbar>
      <div></div>
    </Navbar>
  )
}

describe('Navbar component', () => {
  test('Should go to signup page on register button clicked', () => {
    const push = jest.fn()
    const pathname = jest.fn()

    ;(useRouter as jest.Mock).mockImplementationOnce(() => ({
      push,
      pathname
    }))

    makeSut()

    const button = screen.getByTestId('signup-button')
    fireEvent.click(button)
    expect(push).toHaveBeenCalledWith('/accounts/signup')
  })
})
