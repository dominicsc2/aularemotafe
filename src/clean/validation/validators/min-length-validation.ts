import { MinLengthError } from '../errors'
import { FieldValidation } from '../protocols'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLegth: number) {}

  validate(input: Record<string, any>): Error {
    return input[this.field] >= this.minLegth ? null : new MinLengthError(this.field, this.minLegth)
  }
}
