import { CompareFieldError } from '../errors'
import { FieldValidation } from '../protocols'

export class CompareFieldsValidation implements FieldValidation {
  constructor(readonly field: string, private readonly fieldToCompare: string) {}

  validate(input: Record<string, any>): Error {
    return input[this.field] !== input[this.fieldToCompare]
      ? new CompareFieldError(this.field, this.fieldToCompare)
      : null
  }
}
