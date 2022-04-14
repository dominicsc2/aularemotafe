import { MinLengthError } from '../errors'
import { FieldValidation } from '../protocols'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLegth: number) {}

  validate(input: Record<string, string>): Error {
    return input[this.field]?.length < this.minLegth ? new MinLengthError(this.field, this.minLegth) : null
  }
}
