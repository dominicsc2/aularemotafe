import { HttpStatusCode } from "@clean/data/protocols/http"
import { RemoteRefreshToken } from "@clean/data/usecases/remote-refresh-token"
import { UnAuthorizedError } from "@clean/domain/errors"
import { SignUp } from "@clean/domain/usecases"
import faker from "@faker-js/faker"
import { HttpClientSpy } from "../mocks"

type SutTypes = {
  httpClientSpy: HttpClientSpy<SignUp.Params, SignUp.Result>
  sut: RemoteRefreshToken
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<SignUp.Params, SignUp.Result>()
  const sut = new RemoteRefreshToken(url, httpClientSpy)

  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteRefreshToken usecase', () => {
  test('Should call httpClient with correct values', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    await sut.refreshTokens()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('GET')
  })

  test('Should throw UnAuthorizedError if HttpClient return 401', async () => {
    const errorMessage = faker.random.words()
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
      body: {
        message: errorMessage
      }
    }
    const promise = sut.refreshTokens()
    await expect(promise).rejects.toThrowError(new UnAuthorizedError(errorMessage))
    await expect(promise).rejects.toBeInstanceOf(UnAuthorizedError)
  })
})