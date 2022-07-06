import styles from './SideBar.module.scss';
import PropTypes from 'prop-types';
const MenuItem = ({ title, icon, href }) => {
  return (
    <li className={styles.menuItem}>
      <a href={href}>
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
