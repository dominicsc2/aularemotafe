import { Validation } from '@clean/presentation/protocols'
import { ValidationBuilder, ValidationComposite } from '@clean/validation/validators'

export const makeSignupValidation = (): Validation => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('username').required().min(6).build(),
    ...ValidationBuilder.field('password').required().min(6).build(),
    ...ValidationBuilder.field('passwordConfirm').required().sameAs('password').build()
  ])
}
