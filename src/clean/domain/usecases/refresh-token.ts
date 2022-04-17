import { AuthenticationResponseDto } from "../dto"

export interface RefreshToken {
  refreshTokens(refreshToken: string): Promise<RefreshToken.Result>
}

export namespace RefreshToken {
  export type Result = AuthenticationResponseDto.Result
}