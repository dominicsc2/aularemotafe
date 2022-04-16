import React from 'react';
import styles from './DropableModal.module.scss';

interface ModalContent {
  children: JSX.Element | JSX.Element[]
  // setShow: Dispatch<SetStateAction<boolean>>
}
export const DropableModal : React.FC<ModalContent> = (props) => (
  <div data-testid="dropable-modal" className={styles['dropdown-modal']}>
    <div className={`${styles['dropdow-modal-menu']} ${styles.right}`}>
      { props.children }
    </div>
  </div>
);

export default DropableModal;
