import { SignUpParamsDto } from '@clean/domain/dto'
import { SignUp } from '@clean/domain/usecases'
import { Validation } from '@clean/presentation/protocols'
import faker from '@faker-js/faker'
import { mockAccountModel } from '@tests/domain/mocks'

export class ValidationSpy implements Validation {
  errorMessage: string = ''

  validate(fieldName: string, input: object): string {
    return this.errorMessage
  }
}

export class SignUpSpy implements SignUp {
  account = mockAccountModel()
  params: SignUpParamsDto
  callsCount = 0

  async signup(params: SignUpParamsDto): Promise<SignUp.Result> {
    this.callsCount++
    this.params = params
    return await Promise.resolve({
      message: faker.random.words(),
      result: this.account,
      success: true
    })
  }
}
