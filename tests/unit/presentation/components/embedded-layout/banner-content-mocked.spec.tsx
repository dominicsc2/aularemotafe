import BannerCallToAction from '@clean/presentation/components/common/banners/BannerCallToAction/BannerCallToAction'
import { BannerContent } from '@clean/presentation/components/embedded-layout'
import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import { createMockRouter } from '../../helpers'

window.scrollTo = jest.fn()

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
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('Should render student banner content if url is /', () => {
    makeSut()

    const props2 = {
      backgroundImage: 'url(' + '/img/student.jpg' + ')',
      mainTitle: 'Todo lo que necesitas en un solo lugar',
      bannerDescription:
        'Aprende a tu ritmo, a cualquier hora del día y donde te encuentres con las clases en vivo, cursos, banco de tareas y exámenes que ofrece Trilce  a través de su comunidad.',
      contentWrapperStyle: 'studentContent',
      mainInfoStyle: 'bannerInfo',
      buttonStyle: 'secondary',
      href: '/account/login',
      buttonText: 'Comienza a aprender'
    }

    const props1 = {
      backgroundImage: 'url(/img/student.jpg)',
      mainTitle: '',
      bannerDescription: '',
      contentWrapperStyle: '',
      mainInfoStyle: '',
      buttonStyle: 'primary',
      href: '/instructor-enquire',
      buttonText: ''
    }

    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[0])).toStrictEqual(JSON.stringify([props1, {}]))
    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[1])).toStrictEqual(JSON.stringify([props2, {}]))
  })

  test('Should render instructor banner content if url is /instructor', () => {
    makeSut('/instructor')

    const props2 = {
      backgroundImage: 'url(' + '/img/instructor.jpg' + ')',
      mainTitle: 'Enseña en línea a miles de estudiantes universitarios',
      bannerDescription: 'Llega a más alumnos, comparte tu conocimientos y gana dinero.',
      contentWrapperStyle: 'instructorContent',
      mainInfoStyle: 'bannerInfo',
      buttonStyle: 'secondary',
      href: '/instructor-enquire',
      buttonText: 'Comienza a enseñar'
    }

    const props1 = {
      backgroundImage: 'url(/img/student.jpg)',
      mainTitle: '',
      bannerDescription: '',
      contentWrapperStyle: '',
      mainInfoStyle: '',
      buttonStyle: 'primary',
      href: '/instructor-enquire',
      buttonText: ''
    }

    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[0])).toStrictEqual(JSON.stringify([props1, {}]))
    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[1])).toStrictEqual(JSON.stringify([props2, {}]))
  })

  test('Should render instructor banner content if url is /main', () => {
    makeSut('/main')

    const props2 = {
      backgroundImage: 'url(' + '/img/student.jpg' + ')',
      mainTitle: 'Realiza una consulta',
      bannerDescription:
        'Resuelve de forma rápida las dudas que tengas respecto a algún examen, trabajo, tarea u otro tipo de documento o evento.' +
        'Ingresa en la caja de búsqueda palabras clave como:' +
        "<span class='hightlight'> tarea, examen, trabajo, nombre del curso.</span>" +
        'Nuestro motor de búsqueda te redirigirá a foros de preguntas y respuestas',
      contentWrapperStyle: 'studentContent',
      mainInfoStyle: 'bannerInfo',
      searchBoxPlaceholder: 'Filtra por curso o tipo de documento',
      buttonText: 'Comienza a aprender'
    }

    const props1 = {
      backgroundImage: 'url(/img/student.jpg)',
      mainTitle: '',
      bannerDescription: '',
      contentWrapperStyle: '',
      mainInfoStyle: '',
      searchBoxPlaceholder: 'Filtra por curso o tipo de documento',
      buttonText: ''
    }

    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[0])).toStrictEqual(JSON.stringify([props1, {}]))
    expect(JSON.stringify((BannerCallToAction as jest.Mock).mock.calls[1])).toStrictEqual(JSON.stringify([props2, {}]))
  })
})
