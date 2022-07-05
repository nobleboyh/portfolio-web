import { useEffect, useRef } from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
const Card = ({ image, title, children, mainColor }) => {
  useEffect(() => {
    if (mainColor === undefined || mainColor === null) {
      return;
    }
    wrapperRef.current.style.setProperty('--main-card-color', mainColor);
  }, [mainColor]);
  const wrapperRef = useRef();
  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <img src={image} alt={title} className={styles.logo} />
      <h2>{title}</h2>
      <div className={styles.childrenWrapper}>{children}</div>
      <button className={styles.detailBtn}>Detail</button>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
};
export default Card;
