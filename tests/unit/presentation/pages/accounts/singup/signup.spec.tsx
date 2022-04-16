import { SignUp } from "@clean/domain/usecases"
import { Signup } from "@clean/presentation/pages"
import { RequiredFieldError } from "@clean/validation/errors"
import faker from "@faker-js/faker"
import { render, RenderResult, screen } from "@testing-library/react"
import { populateField, simulateValidSubmit, submitForm, testStatusForField } from "../../helpers"
import { SignUpSpy, ValidationSpy } from "../mocks"

type SutTypes = {
  sut: RenderResult
  signupSpy: SignUpSpy
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationSpy = new ValidationSpy()
  const signupSpy = new SignUpSpy()
  validationSpy.errorMessage = params?.validationError
  const sut = render(
    <Signup 
      validation={validationSpy}
      addAccount={signupSpy}
    />
  )

  return {
    sut,
    signupSpy
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
    const { signupSpy } = makeSut()
    const username = faker.internet.userName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(username, email, password)
    expect(signupSpy.params).toEqual({
      username,
      email,
      password,
      passwordConfirm: password
    })
  })
})