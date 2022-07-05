import styles from './Content.module.scss';
import Aboutme from './sections/Aboutme';
import Backgrounds from './sections/Backgrounds';
import Experiences from './sections/Experiences';
const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Aboutme />
        <Backgrounds />
        <Experiences />
      </div>
    </div>
  );
};

export default Content;
