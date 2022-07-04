import styles from './Accordion.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const AccordionItem = ({ title, detail }) => {
  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <span>{title}</span>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <div className={styles.detail}>{detail}</div>
    </li>
  );
};
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string,
};
export default AccordionItem;
