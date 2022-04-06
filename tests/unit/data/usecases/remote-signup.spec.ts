import { HttpStatusCode } from '@data/protocols/http'
import { RemoteSignUp } from '@data/usecases/remote-signup'
import { AulaRemotaConstants } from '@domain/constants'
import { ForbiddenError } from '@domain/errors'
import { SignUp } from '@domain/usecases'
import faker from '@faker-js/faker'
import { HttpClientSpy, mockSignUpParams } from '../mocks'

type SutTypes = {
  httpClientSpy: HttpClientSpy<SignUp.Params, SignUp.Result>
  sut: RemoteSignUp
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<SignUp.Params, SignUp.Result>()
  const sut = new RemoteSignUp(url, httpClientSpy)

  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteSignUp usecase', () => {
  test('Should call httpClient with correct values', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    const addAccountParams = mockSignUpParams
    await sut.signup(addAccountParams)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('POST')
    expect(httpClientSpy.body).toEqual(addAccountParams)
  })

  test('Should throw ForbiddenError if HttpPostClient returns 403', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
      body: {
        message: AulaRemotaConstants.EMAIL_IN_USE_ERROR
      }
    }
    const promise = sut.signup(mockSignUpParams)
    await expect(promise).rejects.toThrow(new ForbiddenError(AulaRemotaConstants.EMAIL_IN_USE_ERROR))
  })
})
