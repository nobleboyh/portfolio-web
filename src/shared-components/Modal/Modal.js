import usePortal from '~/hooks/usePortal';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const target = usePortal('modal');
  return ReactDOM.createPortal(children, target);
};

export default Modal;
