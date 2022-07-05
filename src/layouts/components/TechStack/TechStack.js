import { useEffect, useRef } from 'react';
import styles from './TechStack.module.scss';
import PropTypes from 'prop-types';
const TechStack = ({ title, children, mainColor }) => {
  useEffect(() => {
    if (mainColor === undefined || mainColor === null) {
      return;
    }
    wrapperRef.current.style.setProperty('--main-card-color', mainColor);
  }, [mainColor]);
  const wrapperRef = useRef();
  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <h2>{title}</h2>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};
TechStack.propTypes = {
  title: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
};
export default TechStack;
