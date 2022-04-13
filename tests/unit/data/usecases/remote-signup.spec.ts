import faker from '@faker-js/faker'
import { HttpStatusCode } from '@clean/data/protocols/http'
import { RemoteSignUp } from '@clean/data/usecases/remote-signup'
import { HttpClientSpy, mockSignUpParams } from '../mocks'
import { mockAuthenticationResponseModel } from '../mocks/mock-auth'
import { BadRequestError, UnAuthorizedError, ForbiddenError, ServerError } from '@clean/domain/errors'
import { SignUp } from '@clean/domain/usecases'

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

  test('Should throw BadRequestError if HttpPostClient returns 400', async () => {
    const errorMessage = faker.random.words()
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
      body: {
        message: errorMessage
      }
    }
    const promise = sut.signup(mockSignUpParams)
    await expect(promise).rejects.toThrow(new BadRequestError(errorMessage))
    await expect(promise).rejects.toBeInstanceOf(Error)
  })

  test('Should throw UnAuthorizedError if HttpPostClient returns 401', async () => {
    const errorMessage = faker.random.words()
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
      body: {
        message: errorMessage
      }
    }
    const promise = sut.signup(mockSignUpParams)
    await expect(promise).rejects.toThrow(new UnAuthorizedError(errorMessage))
    await expect(promise).rejects.toBeInstanceOf(Error)
  })

  test('Should throw ForbiddenError if HttpPostClient returns 403', async () => {
    const errorMessage = faker.random.words()
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
      body: {
        message: errorMessage
      }
    }
    const promise = sut.signup(mockSignUpParams)
    await expect(promise).rejects.toThrow(new ForbiddenError(errorMessage))
    await expect(promise).rejects.toBeInstanceOf(Error)
  })

  test('Should throw Server if HttpPostClient returns 500', async () => {
    const errorMessage = faker.random.words()
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
      body: {
        message: errorMessage
      }
    }
    const promise = sut.signup(mockSignUpParams)
    await expect(promise).rejects.toThrow(new ServerError(errorMessage))
    await expect(promise).rejects.toBeInstanceOf(Error)
  })

  test('Should return AuthenticationResponseDto if httpPostClient returns 200', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response.body = mockAuthenticationResponseModel
    const result = await sut.signup(mockSignUpParams)
    expect(result).toEqual(mockAuthenticationResponseModel)
  })
})
