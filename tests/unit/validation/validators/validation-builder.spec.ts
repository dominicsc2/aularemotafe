import { MinLengthValidation, RequiredFieldValidation, ValidationBuilder } from '@clean/validation/validators'
import faker from '@faker-js/faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = ValidationBuilder.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = ValidationBuilder.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })
})
