export class MinLengthError extends Error {
  constructor(fieldName: string, minLegth: number) {
    super(`${fieldName} should be at least ${minLegth} characters.`)
    this.name = 'MinLengthError'
  }
}
