import styles from './Slider.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const SliderItem = ({ title, subtitle, description, image, color }) => {
  const container = useRef();
  useEffect(() => {
    if (color === undefined) {
      return;
    }
    container.current.style.setProperty('--background-color', color);
  }, [color]);
  return (
    <div className={styles.slideWrapper} ref={container}>
      <div className={styles.slideContainer}>
        <div>
          <h1>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title}></img>
        </div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.node,
  image: PropTypes.any,
};
export default SliderItem;
