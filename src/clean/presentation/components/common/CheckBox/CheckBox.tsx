import { changeHandler } from '@clean/presentation/ts/types/app-types';
import React from 'react';
import styles from './CheckBox.module.scss';

interface ISwitch {
  input?: any
  onCheckChange?: changeHandler<HTMLInputElement>
}

export const CheckBox: React.FC<ISwitch> = (props: ISwitch) => (
  <label id={styles.checkBox}>
    <input type="checkbox" onChange={props.onCheckChange} defaultChecked={props.input.checked} />
    <span className={styles.checkmark} />
  </label>
);

export default CheckBox;
