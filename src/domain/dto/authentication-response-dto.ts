import { User } from '@domain/models'

export type AuthenticationResponse = {
  message: string;
  success: boolean;
  result:  AuthenticationResponse.Result;
}

export namespace AuthenticationResponse {
  export type Result = {
    accessToken: string;
  user?:        User;
  }
}