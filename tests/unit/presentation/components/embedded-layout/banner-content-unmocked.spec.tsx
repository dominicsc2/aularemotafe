import { BannerContent } from '@clean/presentation/components/embedded-layout'
import { fireEvent, render, screen } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import { createMockRouter } from '../../helpers'

window.scrollTo = jest.fn()

type SutTypes = {
  router: NextRouter
}

const makeSut = (pathname: string = '/'): SutTypes => {
  const router = createMockRouter({ pathname })
  render(
    <RouterContext.Provider value={router}>
      <BannerContent />
    </RouterContext.Provider>
  )
  return {
    router
  }
}

describe('BannerContent component', () => {
  test('Should return Banner component if pathname is /instructor-welcome', () => {
    makeSut('/instructor-welcome')
    expect(screen.queryByTestId('banner')).toBeInTheDocument()
  })

  test('Should return BannerCallToAction component if pathname is not /instructor-welcome', async () => {
    makeSut()
    expect(screen.queryByTestId('banner-call-to-action')).toBeInTheDocument()
  })

  test('Should call router with /account/login if pathname is /', () => {
    const { router } = makeSut()

    const callToActionButton = screen.getByTestId('call-to-action')
    fireEvent.click(callToActionButton)

    expect(router.push).toHaveBeenCalledWith('/account/login')
  })
})
