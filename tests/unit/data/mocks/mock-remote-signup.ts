import { HttpRequestParams, HttpClient, HttpResponse, HttpStatusCode } from '@data/protocols/http'
import { SignUp } from '@domain/usecases'
import faker from '@faker-js/faker'

const password = faker.internet.password()

export const mockSignUpParams: SignUp.Params = {
  email: faker.internet.email(),
  username: faker.name.findName(),
  password: password,
  passwordConfirm: password
}

export const mockHttpRequest: HttpRequestParams<any> = {
  url: faker.internet.url(),
  body: {},
  headers: JSON.parse(faker.datatype.json()),
  method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
}

export class HttpClientSpy<T, R> implements HttpClient<T, R> {
  url?: string
  method?: string
  body?: T
  headers: any
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
    body: {} as any
  }

  async request(data: HttpRequestParams): Promise<HttpResponse> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return await Promise.resolve(this.response)
  }
}
