import faker from '@faker-js/faker'
import { InvalidEmailError } from '@clean/validation/errors'
import { FieldValidation } from '@clean/validation/protocols'
import { EmailValidation } from '@clean/validation/validators'

const makeSut = (field: string): FieldValidation => new EmailValidation(field)

describe('EmailValidation', () => {
  test('Should return an error if email is invalid', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const error = sut.validate({ [fieldName]: faker.random.word() })
    expect(error).toEqual(new InvalidEmailError())
  })
})
