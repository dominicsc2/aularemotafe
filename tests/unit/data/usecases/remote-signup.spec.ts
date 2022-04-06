import { RemoteSignUp } from '@data/usecases/remote-signup'
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
    const addAccountParams = mockSignUpParams()
    await sut.signup(addAccountParams)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('POST')
    expect(httpClientSpy.body).toEqual(addAccountParams)
  })
})
