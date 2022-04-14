import { RequiredFieldError } from "@clean/validation/errors"
import { FieldValidation } from "@clean/validation/protocols"
import { RequiredFieldValidation } from "@clean/validation/validators"
import faker from "@faker-js/faker"


const makeSut = (field: string): FieldValidation => new RequiredFieldValidation(field)

describe('RequiredFieldValidation', () => {
  test('Should return an error if field is empty', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const error = sut.validate({ [fieldName]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const error = sut.validate({ [fieldName]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})