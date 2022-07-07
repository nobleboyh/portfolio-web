import { faCode, faGraduationCap, faFaceKiss, faFolderOpen, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from './MenuItem';
import styles from './SideBar.module.scss';

const publicRoutes = [
  {
    title: 'About me',
    icon: <FontAwesomeIcon icon={faFolderOpen} />,
    href: '#top',
  },
  {
    title: 'Backgrounds',
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    href: '#backgrounds',
  },
  {
    title: 'Experiences',
    icon: <FontAwesomeIcon icon={faCode} />,
    href: '#experiences',
  },
  {
    title: 'Hobbies',
    icon: <FontAwesomeIcon icon={faFaceKiss} />,
    href: '#hobbies',
  },
  {
    title: 'Contact',
    icon: <FontAwesomeIcon icon={faIdCard} />,
    href: '#contact',
  },
];
const SideBar = () => {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.menu}>
        {publicRoutes.map((item, index) => (
          <MenuItem title={item.title} icon={item.icon} href={item.href} key={index} />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
