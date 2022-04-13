import React from 'react';
import style from './Calendar.module.scss';

export const Calendar:React.FC = ():JSX.Element => (
  <div className={style.Margin}>
    <div className={style.InputBox}>
      <p>Desde:</p>
      <input
        type="date"
        className={style.InputSize}
      />
    </div>
    <div className={style.InputBox}>
      <p>Hasta:</p>
      <input
        type="date"
        className={style.InputSize}
      />
    </div>
  </div>
);

export default Calendar;
