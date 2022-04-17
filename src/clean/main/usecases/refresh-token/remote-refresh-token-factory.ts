import { RemoteRefreshToken } from '@clean/data/usecases'
import { RefreshToken } from '@clean/domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '@clean/main/factories/http'

export const makeRefreshToken = (): RefreshToken => {
  return new RemoteRefreshToken(makeApiUrl('/refresh_tokens'), makeAxiosHttpClient())
}
