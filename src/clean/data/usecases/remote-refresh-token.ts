import { AuthenticationResponseDto } from '@clean/domain/dto'
import { RefreshToken } from '@clean/domain/usecases'
import { HttpClient } from '../protocols/http'

export class RemoteRefreshToken implements RefreshToken {
  constructor(private readonly url: string, private readonly httpPostClient: HttpClient<string, RefreshToken.Result>) {}

  async refreshTokens(): Promise<AuthenticationResponseDto.Result> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'GET'
    })
    return null
  }
}
