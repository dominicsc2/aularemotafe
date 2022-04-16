let accessTokenStore: string = ''

export const setAccessToken = (s: string) => {
  accessTokenStore = s
}

export const getAccessToken = () => {
  return accessTokenStore
}
