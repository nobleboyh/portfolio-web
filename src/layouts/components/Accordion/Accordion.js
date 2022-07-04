import styles from './Accordion.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
const Accordion = ({ children, className }) => {
  const classes = cx(className, cx('wrapper'));
  return <ul className={classes}>{children}</ul>;
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Accordion;
