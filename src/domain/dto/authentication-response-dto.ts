import { User } from '@domain/models'
import { BaseResponseDto } from './base-repose-dto'

export type AuthenticationResponseDto = BaseResponseDto<AuthenticationResponseDto.Result>

export namespace AuthenticationResponseDto {
  export type Result = {
    accessToken: string
    user?: User
  }
}
