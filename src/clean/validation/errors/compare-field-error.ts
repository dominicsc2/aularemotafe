export class CompareFieldError extends Error {
  constructor(field: string, fieldToCompare: string) {
    super(`${field} must be equal to value of ${fieldToCompare}.`)
    this.name = 'CompareFieldError'
  }
}