/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './SideBar.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

let cx = classNames.bind(styles);
const MenuItem = ({ title, icon, href, onClick }) => {
  const [classes, setClasses] = useState(cx('menuItem'));
  window.addEventListener('hashchange', () => {
    console.log('location changed');
    if (window.location.href.includes(href)) {
      setClasses(cx('menuItem', 'active'));
    } else {
      setClasses(cx('deactive', 'menuItem'));
    }
    console.log(window.location.href);
    console.log(classes);
  });

  return (
    <li className={classes}>
      <a href={href} onClick={onClick}>
        <span className={styles.itemIcon}>{icon}</span>
        <span className={styles.itemTitle}>{title}</span>
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  href: PropTypes.string,
};

export default MenuItem;
