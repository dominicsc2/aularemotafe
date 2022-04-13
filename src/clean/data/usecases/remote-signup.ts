import { HttpClient, HttpStatusCode } from '@clean/data/protocols/http';
import {
  BadRequestError, ForbiddenError, UnAuthorizedError, ServerError
} from '@clean/domain/errors';
import { SignUp } from '@clean/domain/usecases';
import { SignUpParamsDto, AuthenticationResponseDto } from '@clean/domain/dto';

export class RemoteSignUp implements SignUp {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpClient<SignUp.Params, SignUp.Result>
  ) {}

  async signup(params: SignUpParamsDto): Promise<AuthenticationResponseDto> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'POST',
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new BadRequestError(httpResponse.body.message);
      case HttpStatusCode.forbidden:
        throw new ForbiddenError(httpResponse.body.message);
      case HttpStatusCode.unauthorized:
        throw new UnAuthorizedError(httpResponse.body.message);
      default:
        throw new ServerError(httpResponse.body.message);
    }
  }
}
