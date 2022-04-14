import { clickHandler } from '@clean/presentation/ts/types/app-types'

export interface IButton {
  dataTestId?: string
  type?: 'submit'
  onClick?: clickHandler
  color?: string
  redirectTo?: string
}
