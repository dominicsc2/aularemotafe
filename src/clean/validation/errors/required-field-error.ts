export class RequiredFieldError extends Error {
  constructor() {
    super('This field is required.')
    this.name = 'RequiredFieldError'
  }
}