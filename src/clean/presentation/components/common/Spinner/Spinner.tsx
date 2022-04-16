import React from 'react';
import { ISpinner } from '../interfaces/spinner.interfaces';
import styles from './spinner.module.scss';

const Spinner: React.FC<ISpinner> = (props) => (
  <div data-testid="spinner" className={props.type === 'spinner-replace' ? styles.spinnerReplace : styles.spinner} />
);

export default Spinner;
