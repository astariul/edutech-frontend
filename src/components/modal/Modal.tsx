import { useCallback } from 'react';
import { ReactNode } from 'react';
import useStyles from './style';

interface ModalProps {
  show: boolean;
  children: ReactNode;
  onCloseModal: () => void;
  title?: string;
}

const Modal = ({ show, children, onCloseModal, title=""}: ModalProps) => {
  const {classes} = useStyles();
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <div className={classes.main}>
      <div className={classes.inner} onClick={stopPropagation}>
        <div className={classes.header}>
          <div className={classes.title}>{title}</div>
          <img onClick={onCloseModal} src={require("../../../src/static/image/remove.png") } alt="remove" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
