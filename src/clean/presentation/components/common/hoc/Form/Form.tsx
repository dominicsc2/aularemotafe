import React from 'react';
import { IntersectBaseProps } from '../../types/form.types';
import styles from './Form.module.scss';

export const Form: React.FC<IntersectBaseProps> = ({
  submit,
  title,
  children,
  additionalStyles,
}) => (
  <form data-testid="form" onSubmit={submit} id={styles.form} className={`${styles.container} ${additionalStyles}`}>
    { title ? <p className={styles.title}>{title}</p> : null }
    { children }
  </form>
);

export default Form;
