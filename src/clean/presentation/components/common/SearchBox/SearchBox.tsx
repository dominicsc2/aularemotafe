import React from 'react';
import Form from '../hoc/Form/Form';
import { IntersectBaseProps } from '../types/searchbox.types';
import Input from '../Input/Input';
import classes from './SearchBox.module.scss';

const SearchBox : React.FC<IntersectBaseProps> = ({ placeholder, additionalStyles }) => (
  <Form submit={() => {}} additionalStyles="search-container py-b-0">
    <div className={`${classes.searchContainer} flex-items row`}>
      <Input
        elementType="input"
        elementConfig={{ type: 'text', placeholder }}
        additionalStyles="no-focus"
        changed={() => {}}
      />
      <button className={`${classes.button} ${additionalStyles}`}><i className="fa fa-search " /></button>
    </div>
  </Form>
);

export default SearchBox;
