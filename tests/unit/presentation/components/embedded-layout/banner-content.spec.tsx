import BannerCallToAction from '@clean/presentation/components/common/banners/BannerCallToAction/BannerCallToAction'
import { BannerContent } from '@clean/presentation/components/embedded-layout'
import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import { createMockRouter } from '../../helpers'

window.scrollTo = jest.fn();

jest.mock('@clean/presentation/components/common/banners/BannerCallToAction/BannerCallToAction', () => {
  return jest.fn(() => null)
})

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
  test('Should render student banner content if url is /', async () => {
    makeSut()

    const props2 = {
      backgroundImage: 'url(' + '/img/student.jpg' + ')',
      mainTitle: 'Todo lo que necesitas en un solo lugar',
      bannerDescription:
        'Aprende a tu ritmo, a cualquier hora del día y donde te encuentres con las clases en vivo, cursos, banco de tareas y exámenes que ofrece Trilce  a través de su comunidad.',
      contentWrapperStyle: 'studentContent',
      mainInfoStyle: 'bannerInfo',
      buttonStyle: 'secondary',
      buttonText: 'Comienza a aprender'
    }

    const props1 = {
      backgroundImage: 'url(/img/student.jpg)',
      mainTitle: '',
      bannerDescription: '',
      contentWrapperStyle: '',
      mainInfoStyle: '',
      buttonStyle: 'primary',
      buttonText: ''
    }

    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[0]))
    .toStrictEqual(JSON.stringify([props1, {}]))
    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[1]))
    .toStrictEqual(JSON.stringify([props2, {}]))
  })
})
