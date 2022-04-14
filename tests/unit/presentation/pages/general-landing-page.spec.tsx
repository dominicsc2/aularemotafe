import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import { footerAd, GeneralLandingPage, hookDescription, howItWorks, uploadAbout } from '@clean/presentation/pages'

jest.mock('next/router', () => ({ __esModule: true, useRouter: jest.fn() }))

const makeSut = (): void => {
  render(
    <GeneralLandingPage
      hookDescription={hookDescription}
      howItWorks={howItWorks}
      uploadAbout={uploadAbout}
      footerAd={footerAd}
      href="/instructor"
    />
  )
}

describe('StudentLandingPage component', () => {
  test('Should go to instructor page on call-to-action button clicked', () => {
    const push = jest.fn();

    (useRouter as jest.Mock)
      .mockImplementationOnce(() => ({
        push
      }))

    makeSut()
    const button = screen.getByTestId('call-to-action')
    fireEvent.click(button)
    expect(push).toHaveBeenCalledWith('/instructor')
  })
})
