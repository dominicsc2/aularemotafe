export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpRequestParams<BodyType = any> = {
  url: string
  method: HttpMethod
  body?: BodyType
  headers?: any
}

export interface HttpClient<BodyType = any, ResponseType = any> {
  request: (data: HttpRequestParams<BodyType>) => Promise<HttpResponse<ResponseType>>
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<R = any> = {
  statusCode: HttpStatusCode
  body: R
}
