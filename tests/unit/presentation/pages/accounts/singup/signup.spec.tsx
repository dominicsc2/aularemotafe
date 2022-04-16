import { UnAuthorizedError } from '@clean/domain/errors'
import { Signup } from '@clean/presentation/pages'
import { setAccessToken } from '@clean/presentation/store/access-token-store'
import { RequiredFieldError } from '@clean/validation/errors'
import faker from '@faker-js/faker'
import { render, RenderResult, screen, waitFor } from '@testing-library/react'
import { createMockRouter } from '@tests/unit/presentation/helpers'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import { populateField, simulateValidSubmit, submitForm, testStatusForField } from '../../helpers'
import { SignUpSpy, ValidationSpy } from '../mocks'

jest.mock('@clean/presentation/store/access-token-store')

jest.mock('next/link')

type SutTypes = {
  sut: RenderResult
  addAccountSpy: SignUpSpy
  router: NextRouter
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addAccountSpy = new SignUpSpy()
  validationSpy.errorMessage = params?.validationError
  const router = createMockRouter({})
  const sut = render(
    <RouterContext.Provider value={router}>
      <Signup validation={validationSpy} addAccount={addAccountSpy} />
    </RouterContext.Provider>
  )

  return {
    sut,
    addAccountSpy,
    router
  }
}

describe('SignupPage component', () => {
  test('Should start with initial state', () => {
    makeSut()
    expect(screen.getByTestId('email-wrap').children).toHaveLength(1)
    expect(screen.getByTestId('username-wrap').children).toHaveLength(1)
    expect(screen.getByTestId('password-wrap').children).toHaveLength(1)
    expect(screen.getByTestId('passwordConfirm-wrap').children).toHaveLength(1)

    expect(screen.queryByTestId('email-error')).toBeNull()
    expect(screen.queryByTestId('username-error')).toBeNull()
    expect(screen.queryByTestId('password-error')).toBeNull()
    expect(screen.queryByTestId('passwordConfirm-error')).toBeNull()

    expect(screen.getByTestId('email').textContent).toBe('')
    expect(screen.getByTestId('username').textContent).toBe('')
    expect(screen.getByTestId('password').textContent).toBe('')
    expect(screen.getByTestId('passwordConfirm').textContent).toBe('')
  })

  test('Should show username error if validation fails', () => {
    const validationError = faker.random.words()
    makeSut({ validationError })
    populateField('username')
    testStatusForField('username', validationError)
  })

  test('Should show email error if validation fails', () => {
    const validationError = faker.random.words()
    makeSut({ validationError })
    populateField('email')
    testStatusForField('email', validationError)
  })

  test('Should show password error if validation fails', () => {
    const validationError = faker.random.words()
    makeSut({ validationError })
    populateField('password')
    testStatusForField('password', validationError)
  })

  test('Should show passwordConfirm error if validation fails', () => {
    const validationError = faker.random.words()
    makeSut({ validationError })
    populateField('passwordConfirm')
    testStatusForField('passwordConfirm', validationError)
  })

  test('Should not show username error if validation succeeds', () => {
    makeSut()
    populateField('username')
    testStatusForField('username')
  })

  test('Should not show email error if validation succeeds', () => {
    makeSut()
    populateField('email')
    testStatusForField('email')
  })

  test('Should not show password error if validation succeeds', () => {
    makeSut()
    populateField('password')
    testStatusForField('password')
  })

  test('Should not show passwordConfirm error if validation succeeds', () => {
    makeSut()
    populateField('passwordConfirm')
    testStatusForField('passwordConfirm')
  })

  test('Should show RequiredField error when submit button is clicked an any field is empty', async () => {
    const error = new RequiredFieldError()
    makeSut()

    await submitForm()

    testStatusForField('username', error.message)
    testStatusForField('email', error.message)
    testStatusForField('password', error.message)
    testStatusForField('passwordConfirm', error.message)
  })

  test('Should show a spinner on submit', async () => {
    makeSut()
    await simulateValidSubmit()
    expect(screen.queryByTestId('spinner')).toBeInTheDocument()
  })

  test('Should call AddAccount with correct values', async () => {
    const { addAccountSpy } = makeSut()
    const username = faker.internet.userName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(username, email, password)
    expect(addAccountSpy.params).toEqual({
      username,
      email,
      password,
      passwordConfirm: password
    })
  })

  test('Should call AddAccount only once', async () => {
    const { addAccountSpy } = makeSut()
    await simulateValidSubmit()
    await simulateValidSubmit()
    expect(addAccountSpy.callsCount).toBe(1)
  })

  test('Should not call AddAccount if form is invalid', async () => {
    const validationError = faker.random.words()
    const { addAccountSpy } = makeSut({ validationError })
    await simulateValidSubmit()
    expect(addAccountSpy.callsCount).toBe(0)
  })

  test('Should present error if AddAccount fails', async () => {
    const { addAccountSpy } = makeSut()
    const error = new UnAuthorizedError('Email already exists')
    jest.spyOn(addAccountSpy, 'signup').mockImplementationOnce(() => Promise.reject(error))
    await simulateValidSubmit()
    await waitFor(() => expect(screen.getByTestId('main-error')).toHaveTextContent(error.message))
    expect(screen.queryByTestId('spinner')).toBeNull()
  })

  test('Should call setAccessToken on success', async () => {
    const { addAccountSpy, router } = makeSut()
    await simulateValidSubmit()
    expect(setAccessToken).toHaveBeenCalledWith(addAccountSpy.account.accessToken)

    expect(router.replace).toHaveBeenCalledWith('/account/student-enquirement')
  })
})
