export const makeApiUrl = (path: string): string => {
  return `${process.env.REST_API_URL}${path}`
}
