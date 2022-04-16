import { RemoteSignUp } from "@clean/data/usecases/remote-signup";
import { SignUp } from "@clean/domain/usecases";
import { makeApiUrl, makeAxiosHttpClient } from "@clean/main/factories/http";

export const makeRemoteSignup = (): SignUp => {
  return new RemoteSignUp(makeApiUrl('/signup'), makeAxiosHttpClient())
}