import faker from "@faker-js/faker"
import { RequiredFieldValidation } from "@clean/validation/validators"
import { RequiredFieldError } from "@clean/validation/errors"


const makeSut = (field: string): RequiredFieldValidation => new RequiredFieldValidation(field)

describe('RequiredFieldValidation', () => {
  test('Should return an error if field is empty', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const error = sut.validate({ [fieldName]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })
})