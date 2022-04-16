import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import { footerAd, GeneralLandingPage, hookDescription, howItWorks, uploadAbout } from '@clean/presentation/pages'
import { createMockRouter } from '../helpers'

type SutTypes = {
  router: NextRouter
}

const makeSut = (): SutTypes => {
  const router = createMockRouter({})
  render(
    <RouterContext.Provider value={router}>
      <GeneralLandingPage
        hookDescription={hookDescription}
        howItWorks={howItWorks}
        uploadAbout={uploadAbout}
        footerAd={footerAd}
        href="/instructor"
      />
    </RouterContext.Provider>
  )

  return {
    router
  }
}

describe('StudentLandingPage component', () => {
  test('Should go to instructor page on call-to-action button clicked', () => {
    const { router } = makeSut()
    const button = screen.getByTestId('call-to-action')
    fireEvent.click(button)
    expect(router.push).toHaveBeenCalledWith('/instructor')
  })
})
