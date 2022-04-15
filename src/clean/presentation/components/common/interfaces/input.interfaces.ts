import { ISelectOptions } from '@clean/presentation/ts/interfaces/app.interfaces';
import { changeHandler } from '@clean/presentation/ts/types/app-types';

export interface IInput {
  elementType: 'input' | 'textarea' | 'select' | 'radio' | 'switch' | 'checkbox'
  elementConfig?: {
    type?: 'text' | 'email' | 'password' | 'tel' | 'checkbox' | 'radio' | 'range' | 'search'
    placeholder: string
  }
  value?: string
  name?: string
  validation?: {
    required: boolean
  }
  invalid?: boolean
  shouldValidate?: boolean
  touched?: boolean
  changed: changeHandler<any>
  error?: string
  label?: string
  options?: any[] | ISelectOptions[]
  option?: any
}
