import { User } from '@domain/models'
import { BaseResponse } from './base-repose-dto'

export type AuthenticationResponse = BaseResponse<AuthenticationResponse.Result>

export namespace AuthenticationResponse {
  export type Result = {
    accessToken: string
    user?: User
  }
}
