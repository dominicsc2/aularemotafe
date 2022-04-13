import React from 'react'
import { changeHandler } from '@clean/presentation/ts/types/app-types'
import styles from './RadioButtons.module.scss'

interface IRadioButton {
  inputs?: any[]
  onCheckChange?: changeHandler<HTMLInputElement>
}

export const RadioButtons: React.FC<IRadioButton> = props => (
  <div>
    {props.inputs &&
      props.inputs.map((input, i) => (
        <div key={input.name} className={styles['radio-group']}>
          <input
            checked={input.checked}
            onChange={props.onCheckChange}
            type="radio"
            name={input.name}
            id={i.toString()}
          />
          <span>{input.label}</span>
        </div>
      ))}
  </div>
)

export default RadioButtons
