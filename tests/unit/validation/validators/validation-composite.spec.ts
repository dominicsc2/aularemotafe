import { FieldValidation } from '@clean/validation/protocols'
import { ValidationComposite } from '@clean/validation/validators'
import faker from '@faker-js/faker'

class FieldValidationSpy implements FieldValidation {
  error: Error = null

  constructor(readonly field: string) {}

  validate(input: object): Error {
    return this.error
  }
}

describe('ValidationComposite', () => {
  test('Should return an error if any validation fails', () => {
    const fieldName = faker.database.column()
    const fieldValidationsSpy = [new FieldValidationSpy(fieldName), new FieldValidationSpy(fieldName)]
    const validationComposite = ValidationComposite.build(fieldValidationsSpy)
    const errorMessage = faker.random.words()
    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.random.words())
    const error = validationComposite.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBe(errorMessage)
  })
})
