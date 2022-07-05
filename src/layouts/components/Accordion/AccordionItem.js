import styles from './Accordion.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useImperativeHandle, useRef, forwardRef } from 'react';
const AccordionItem = forwardRef(({ title, detail, handleActive, index }, mainRef) => {
  const liRef = useRef();
  console.log('re-render');
  useImperativeHandle(mainRef, () => ({
    active: () => {
      if (!liRef.current.classList.contains(styles.active)) {
        liRef.current.className = [styles.item, styles.active].join(' ');
      } else {
        liRef.current.className = styles.item;
      }
    },
    deactive: () => {
      liRef.current.className = styles.item;
    },
    isActive: () => {
      return !liRef.current.classList.contains(styles.active);
    },
  }));

  // function handleActive() {
  //   if (!liRef.current.classList.contains(styles.active)) {
  //     liRef.current.className = [styles.item, styles.active].join(' ');
  //   } else {
  //     liRef.current.className = styles.item;
  //   }
  // }

  return (
    <li className={styles.item} onClick={() => handleActive(index)} ref={liRef}>
      <div className={styles.title}>
        <span>{title}</span>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <div className={styles.detail}>{detail}</div>
    </li>
  );
});
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string,
};
export default AccordionItem;
