import React from 'react';
import { changeHandler } from '@clean/presentation/ts/types/app-types';

interface ISwitch {
  input?: any
  onCheckChange?: changeHandler<HTMLInputElement>
}

export const InputSwitch: React.FC<ISwitch> = (props: ISwitch) => (
  <label id="switch">
    <input type="checkbox" onChange={props.onCheckChange} defaultChecked={props.input.checked} />
    <span className="slider round" />
  </label>
);

export default InputSwitch;
