import { useEffect, useRef } from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
const Card = ({ image, title, children, mainColor, className, onDetail }) => {
  useEffect(() => {
    if (mainColor === undefined || mainColor === null) {
      return;
    }
    wrapperRef.current.style.setProperty('--main-card-color', mainColor);
  }, [mainColor]);
  const wrapperRef = useRef();
  return (
    <div className={[styles.wrapper, className].join(' ')} ref={wrapperRef}>
      <div className={styles.logoWrapper}>
        <img src={image} alt={title} className={styles.logo} />
      </div>
      <h2>{title}</h2>
      <div className={styles.childrenWrapper}>{children}</div>
      <button className={styles.detailBtn} onClick={(e) => onDetail(e)}>
        Detail
      </button>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
};
export default Card;
