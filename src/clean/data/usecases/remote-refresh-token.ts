import { AuthenticationResponseDto } from '@clean/domain/dto'
import { ServerError, UnAuthorizedError } from '@clean/domain/errors'
import { RefreshToken } from '@clean/domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http'

export class RemoteRefreshToken implements RefreshToken {
  constructor(private readonly url: string, private readonly httpPostClient: HttpClient<string, RefreshToken.Result>) {}

  async refreshTokens(): Promise<AuthenticationResponseDto> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'GET'
    })

    switch(httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new UnAuthorizedError(httpResponse.body.message)
      default:
        throw new ServerError(httpResponse.body.message)
    }
  }
}
