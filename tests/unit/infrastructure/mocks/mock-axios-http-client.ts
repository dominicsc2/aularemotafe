import { HttpRequestParams } from '@data/protocols/http'
import faker from '@faker-js/faker'
import axios from 'axios'

export const httpRequestParams: HttpRequestParams = {
  method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json()),
  headers: JSON.parse(faker.datatype.json())
}

export const mockHttpResponse = {
  data: {},
  status: faker.datatype.number()
}

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockAxios = axios as jest.Mocked<typeof axios>
  mockAxios.request.mockClear().mockResolvedValue(mockHttpResponse)
  return mockAxios
}
