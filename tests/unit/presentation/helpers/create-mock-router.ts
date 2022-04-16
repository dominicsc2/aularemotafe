import { NextRouter } from 'next/router'

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    isFallback: false,
    back: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    },
    defaultLocale: 'en',
    isLocaleDomain: false,
    domainLocales: [],
    isPreview: false,
    isReady: true,
    locale: '',
    locales: [],
    ...router //overrides defaults
  }
}
