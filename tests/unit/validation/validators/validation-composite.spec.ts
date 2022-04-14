import faker from '@faker-js/faker'
import { ValidationComposite } from '@clean/validation/validators'
import { FieldValidationSpy } from '../mocks/mock-validation-composite'

type SutTypes = {
  fieldValidationsSpy: FieldValidationSpy[]
  sut: ValidationComposite
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [new FieldValidationSpy(fieldName), new FieldValidationSpy(fieldName)]
  const sut = ValidationComposite.build(fieldValidationsSpy)

  return {
    fieldValidationsSpy,
    sut
  }
}

describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { fieldValidationsSpy, sut } = makeSut(fieldName)
    const errorMessage = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBe(errorMessage)
  })

  test('Should return falsy if validations succeeds', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, { [fieldName]: faker.random.words() })
    expect(error).toBeFalsy()
  })
})
