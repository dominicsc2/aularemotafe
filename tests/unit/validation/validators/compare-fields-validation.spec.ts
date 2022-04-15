import { CompareFieldError } from '@clean/validation/errors'
import { FieldValidation } from '@clean/validation/protocols'
import { CompareFieldsValidation } from '@clean/validation/validators'
import faker from '@faker-js/faker'

const makeSut = (field: string, fieldToCompare: string): FieldValidation =>
  new CompareFieldsValidation(field, fieldToCompare)

describe('CompareFieldsValidation', () => {
  test('Should return an error if fields are not equal', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: faker.random.words(4), [fieldToCompare]: faker.random.words(3) })
    expect(error).toEqual(new CompareFieldError(field, fieldToCompare))
  })
})
