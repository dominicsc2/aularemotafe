import { ValidationComposite } from '@clean/validation/validators'
import faker from '@faker-js/faker'
import { FieldValidationSpy } from '../mocks/mock-validation-composite'

type SutTypes = {
  fieldValidationsSpy: FieldValidationSpy[]
  validationComposite: ValidationComposite
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [new FieldValidationSpy(fieldName), new FieldValidationSpy(fieldName)]
  const validationComposite = ValidationComposite.build(fieldValidationsSpy)

  return {
    fieldValidationsSpy,
    validationComposite
  }
}

describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { fieldValidationsSpy, validationComposite } = makeSut(fieldName)
    const errorMessage = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.random.words())
    const error = validationComposite.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBe(errorMessage)
  })
})
