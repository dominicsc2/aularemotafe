import { MinLengthError } from '@clean/validation/errors'
import { FieldValidation } from '@clean/validation/protocols'
import { MinLengthValidation } from '@clean/validation/validators'
import faker from '@faker-js/faker'

const makeSut = (field: string, minLegth: number): FieldValidation => new MinLengthValidation(field, minLegth)

describe('MinLengthValidation', () => {
  test('Should return an error if field length is less than specify value', () => {
    const fieldName = faker.database.column()
    const minLength = 5
    const sut = makeSut(fieldName, minLength)
    const error = sut.validate({ [fieldName]: faker.random.alphaNumeric(3) })
    expect(error).toEqual(new MinLengthError(fieldName, minLength))
  })

  test('Should return falsy if field length is greater or equal than specify value', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName, 5)
    const error = sut.validate({ [fieldName]: faker.random.alphaNumeric(6) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exists in schema', () => {
    const sut = makeSut(faker.database.column(), 5)
    const error = sut.validate({ [faker.database.column()]: faker.random.alphaNumeric(6) })
    expect(error).toBeFalsy()
  })
})
