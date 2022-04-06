import { AxiosHttpClient } from '@infrastructure/http/axios-http-client'
import { AxiosStatic } from 'axios'
import { httpRequestParams, mockAxios } from '../mocks'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient<any, any>
  mockedAxios: jest.Mocked<AxiosStatic>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    mockedAxios,
    sut
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = httpRequestParams
    const { mockedAxios, sut } = makeSut()
    await sut.request(request)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: request.method,
      url: request.url,
      data: request.body,
      headers: request.headers
    })
  })
})
