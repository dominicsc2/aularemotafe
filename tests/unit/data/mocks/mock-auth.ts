import { AuthenticationResponseDto } from '@clean/domain/dto'
import faker from '@faker-js/faker'

export const mockAuthenticationResponseModel = (): AuthenticationResponseDto => ({
  message: faker.random.words(),
  result: {
    accessToken: faker.datatype.uuid(),
    user: {
      email: faker.internet.email(),
      username: faker.internet.userName()
    }
  },
  success: true
})
