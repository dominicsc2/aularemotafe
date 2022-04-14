export type optionInputsErrors<T> = {
  [key in keyof T]?: string[]
}
