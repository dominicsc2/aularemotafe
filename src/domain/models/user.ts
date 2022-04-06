import { BaseModel } from './base-model'

export interface User extends BaseModel {
  online?: boolean
  email: string
  name?: string
  username: string
  last_name?: string
  image?: string
}
