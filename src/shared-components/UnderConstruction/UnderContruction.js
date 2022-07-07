import { faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from '../Alert/';
import styles from './UnderConstruction.module.scss';
const UnderContruction = ({ onExit }) => {
  return (
    <Alert onExit={onExit} title="Sorry For This">
      <div className={styles.wrapper}>
        <h1>
          <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
        </h1>
        <p>
          The detailed infomation of projects in my companies is currently confidential. <br />
          Therefore, I could not public it to the Internet.
        </p>
      </div>
    </Alert>
  );
};

export default UnderContruction;
