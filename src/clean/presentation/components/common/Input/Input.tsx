import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import RadioButtons from '../RadioButtons/RadioButtons';
import Select from '../Select/Select';
import InputSwitch from '../switch/InputSwitch';
import { IntersectBaseProps } from '../types/input.types';
import styles from './Input.module.scss';

export const Input: React.FC<IntersectBaseProps> = (props) => {
  let inputElement = null;
  let inputClasses = [styles.inputElement];

  if (props.errors) {
    inputClasses = inputClasses.concat(styles.errorField);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          name={props.name}
          onChange={(e) => props.changed(e)}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          name={props.name}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = <Select value={props.value} items={props.options} />;
      break;
    case 'radio':
      inputElement = <RadioButtons inputs={props.options} onCheckChange={props.changed} />;
      break;
    case 'switch':
      inputElement = <InputSwitch input={props.option} onCheckChange={props.changed} />;
      break;
    case 'checkbox':
      inputElement = <CheckBox input={props.option} onCheckChange={props.changed} />;
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={`${styles.formControl} ${props.additionalStyles}`}>
      { props.label ? <label className={styles.label}>{props.label}</label> : null}
      { inputElement }
      { props.errors && props.errors.map((err) => (
        <p key={err} className={styles.errorMessage}>
          *
          {err}
        </p>
      ))}
    </div>
  );
};

export default Input;
