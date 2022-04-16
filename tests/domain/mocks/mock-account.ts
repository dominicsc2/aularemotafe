import { AuthenticationResponseDto } from "@clean/domain/dto";
import faker from "@faker-js/faker";

export const mockAccountModel = (): AuthenticationResponseDto.Result => ({
  accessToken: faker.datatype.uuid(),
  user: {
    email: faker.internet.email(),
    username: faker.internet.userName()
  }
})