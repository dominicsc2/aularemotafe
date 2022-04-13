import { clickStateHandler } from '@clean/presentation/ts/types/app-types';

export interface IBackdrop {
  open: boolean
  setOpen?: clickStateHandler
}
