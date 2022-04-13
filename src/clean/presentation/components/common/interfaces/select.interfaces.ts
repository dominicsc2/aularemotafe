import { ISelectOptions } from '@clean/presentation/ts/interfaces/app.interfaces';

export interface ISelect {
  value?: string
  items: any | ISelectOptions[]
  multiSelect?: boolean
  tags?: ISelectOptions[]
}
