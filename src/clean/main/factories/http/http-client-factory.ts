import { HttpClient } from "@clean/data/protocols/http";
import { AxiosHttpClient } from "@clean/infrastructure/http/axios-http-client";

export const makeAxiosHttpClient = <BodyType, ResponseType>(): HttpClient<BodyType, ResponseType> => {
  return new AxiosHttpClient<BodyType, ResponseType>()
}