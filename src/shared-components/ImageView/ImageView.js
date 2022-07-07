import styles from './ImageView.module.scss';
import Modal from '~/shared-components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const ImageView = ({ src, onExit }) => {
  const handleImageClick = (event) => {
    event.stopPropagation();
  };
  return (
    <Modal>
      <div className={styles.background} onClick={onExit}>
        <div className={styles.wrapper} onClick={(e) => handleImageClick(e)}>
          <img src={src} alt={src} className={styles.image} />
          <span className={styles.exit} onClick={onExit}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ImageView;
