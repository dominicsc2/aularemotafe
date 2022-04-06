export type BaseResponse<T> = {
  message: string
  success: boolean
  result: T
}