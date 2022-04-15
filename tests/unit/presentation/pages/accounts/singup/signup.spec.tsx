import { Signup } from "@clean/presentation/pages"
import faker from "@faker-js/faker"
import { render, RenderResult, screen } from "@testing-library/react"
import { populateField, testStatusForField } from "../../helpers"
import { ValidationSpy } from "../mocks"

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationSpy = new ValidationSpy()
  validationSpy.errorMessage = params?.validationError
  const sut = render(
    <Signup 
      validation={validationSpy}
    />
  )

  return {
    sut
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
})