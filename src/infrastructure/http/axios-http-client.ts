import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequestParams, HttpResponse } from '@data/protocols/http'

export class AxiosHttpClient<BodyType, ResponseType> implements HttpClient<BodyType, ResponseType> {
  async request(data: HttpRequestParams<BodyType>): Promise<HttpResponse<ResponseType>> {
    let axiosResponse: AxiosResponse<ResponseType, BodyType>
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
