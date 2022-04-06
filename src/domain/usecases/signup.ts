import { AuthenticationResponseDto, SignUpParamsDto } from '@domain/dto'

export interface SignUp {
  signup(params: SignUp.Params): Promise<SignUp.Reuslt>
}

export namespace SignUp {
  export type Params = SignUpParamsDto
  export type Reuslt = AuthenticationResponseDto
}
