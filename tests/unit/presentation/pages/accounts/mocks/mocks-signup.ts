import { Validation } from "@clean/presentation/protocols";

export class ValidationSpy implements Validation {
  errorMessage: string = ''

  validate(fieldName: string, input: object): string {
    return this.errorMessage
  }

}