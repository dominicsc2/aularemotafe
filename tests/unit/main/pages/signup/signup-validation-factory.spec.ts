import { ValidationBuilder, ValidationComposite } from "@clean/validation/validators"
import { makeSignupValidation } from "@clean/main/pages/signup/signup-validation-factory"

describe('SignupValidation factory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeSignupValidation()
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('username').required().min(6).build(),
        ...ValidationBuilder.field('password').required().min(6).build(),
        ...ValidationBuilder.field('passwordConfirm').required().sameAs('password').build()
      ])
    )
  })
})