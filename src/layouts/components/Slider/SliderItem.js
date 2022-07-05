import styles from './Slider.module.scss';
import PropTypes from 'prop-types';

const SliderItem = ({ children }) => {
  return <div className={styles.slideWrapper}>{children}</div>;
};

SliderItem.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SliderItem;
