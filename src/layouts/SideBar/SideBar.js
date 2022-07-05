import { faCode, faGraduationCap, faFaceKiss, faFolderOpen, faIdCard } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from './MenuItem';
import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.menu}>
        <MenuItem title="About me" icon={<FontAwesomeIcon icon={faFolderOpen} />} href={'#aboutme'} />
        <MenuItem title="Backgrounds" icon={<FontAwesomeIcon icon={faGraduationCap} />} />
        <MenuItem title="Experiences" icon={<FontAwesomeIcon icon={faCode} />} />
        <MenuItem title="Hobbies" icon={<FontAwesomeIcon icon={faFaceKiss} />} />
        <MenuItem title="Contact" icon={<FontAwesomeIcon icon={faIdCard} />} />
      </ul>
    </aside>
  );
};

export default SideBar;
