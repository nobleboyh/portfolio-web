import { faFaceGrinWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../Alert/';
import styles from './ThankYouModal.module.scss';
const ThankYouModal = ({ onExit, children, title }) => {
  return (
    <Alert onExit={onExit} title={title} titleColor="#50C878">
      <div className={styles.wrapper}>
        <h1>
          <FontAwesomeIcon icon={faFaceGrinWink} />
        </h1>
        <p>{children}</p>
      </div>
    </Alert>
  );
};

export default ThankYouModal;
