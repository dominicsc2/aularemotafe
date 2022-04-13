import { AxiosStatic } from 'axios'
import { AxiosHttpClient } from '@clean/infrastructure/http/axios-http-client'
import { httpRequestParams, mockAxios, mockHttpResponse } from '../mocks'

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

  test('Should return correct response', async () => {
    const { sut, mockedAxios } = makeSut()
    const httpResponse = await sut.request(httpRequestParams)
    const axiosResponse = await mockedAxios.request.mock.results[0].value
    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    })
  })

  test('Should return correct error', async () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.request.mockRejectedValueOnce({
      response: mockHttpResponse
    })
    const promise = sut.request(httpRequestParams)
    expect(promise).toEqual(mockedAxios.request.mock.results[0].value)
  })
})
