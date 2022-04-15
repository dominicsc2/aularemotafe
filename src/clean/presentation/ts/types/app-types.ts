import { Validation } from '@clean/presentation/protocols';
import { ChangeEvent, MouseEvent, SetStateAction } from 'react';

export type changeHandler<T> = (event: ChangeEvent<T>) => void;

export type clickHandler = (event: MouseEvent<HTMLButtonElement, any>) => void;

export type clickStateHandler = (value: SetStateAction<boolean>) => void;

export type validation = {
  validation : Validation | undefined
}