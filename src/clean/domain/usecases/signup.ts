import { SignUpParamsDto, AuthenticationResponseDto } from '../dto';

export interface SignUp {
  signup(params: SignUp.Params): Promise<SignUp.Result>
}

export namespace SignUp {
  export type Params = SignUpParamsDto
  export type Result = AuthenticationResponseDto
}
