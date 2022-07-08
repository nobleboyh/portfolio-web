import {
  faCode,
  faGraduationCap,
  faFaceKiss,
  faFolderOpen,
  faIdCard,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
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
  const toggleBtn = useRef();
  const toggleMenu = (e) => {
    e.preventDefault();
    if (!toggleBtn.current.classList.contains(styles.mobileBtnActive)) {
      document.querySelector(':root').style.setProperty('--sidebar-width', '120px');
      toggleBtn.current.classList.add(styles.mobileBtnActive);
    } else {
      document.querySelector(':root').style.setProperty('--sidebar-width', '0px');
      toggleBtn.current.classList.remove(styles.mobileBtnActive);
    }
  };
  return (
    <>
      <button className={styles.mobileBtn} onClick={(e) => toggleMenu(e)} ref={toggleBtn}>
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <aside className={styles.wrapper}>
        <ul className={styles.menu}>
          {publicRoutes.map((item, index) => (
            <MenuItem title={item.title} icon={item.icon} href={item.href} key={index} />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
