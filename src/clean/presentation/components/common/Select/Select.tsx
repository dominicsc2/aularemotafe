import React, {
  useState, RefObject, useRef, useEffect,
} from 'react';
import { ISelectOptions } from '@clean/presentation/ts/interfaces/app.interfaces';
import { IntersectPropsSelect } from '../types/select.types';
import styles from './Select.module.scss';

const Dropdown: React.FC<IntersectPropsSelect> = (props) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<ISelectOptions[]>([]);
  const toggle = () => setOpen(!open);
  const container: RefObject<any> = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleOnClick(item: ISelectOptions) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!props.multiSelect) {
        setSelection([item]);
      }
    } else if (props.multiSelect) {
      setSelection([...selection, item]);
    } else {
      const selectionRemaining = selection.filter((current) => current.id !== item.id);
      setSelection([...selectionRemaining]);
    }
    toggle();
  }

  function handleClickOutside(event: any) {
    if (!container.current.contains(event.target)) {
      setOpen(false);
    }
  }

  const dropdownTitleContainer = [styles['select-selected']];
  if (open) {
    dropdownTitleContainer.push(styles['select-arrow-active']);
  }

  return (
    <div className={styles['custom-select']} ref={container} onClick={() => toggle()}>
      <div className={dropdownTitleContainer.join(' ')}>
        <p>{selection.length > 0 ? selection[0].value : props.value}</p>
      </div>
      <div>
        {props.tags
          && props.tags.map((tag: ISelectOptions) => <p key={tag.id}>{tag.value}</p>)}
      </div>
      {open && (
        <div className={styles['select-items']}>
          {props.items.map((item: ISelectOptions) => (
            <div key={item.id} onClick={() => handleOnClick(item)}>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
