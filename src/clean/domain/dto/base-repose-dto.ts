export type BaseResponseDto<T> = {
  message: string
  success: boolean
  result: T
}