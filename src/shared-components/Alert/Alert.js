import styles from './Alert.module.scss';
import Modal from '~/shared-components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const Alert = ({ title, children, onExit }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };
  return (
    <Modal>
      <div
        className={styles.background}
        onClick={(e) => {
          onExit(e);
        }}
      >
        <div className={styles.wrapper} onClick={(e) => handleContentClick(e)}>
          <h3>{title}</h3>
          <span
            className={styles.exit}
            onClick={(e) => {
              onExit(e);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default Alert;
