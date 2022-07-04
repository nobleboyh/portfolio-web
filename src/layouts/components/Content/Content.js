import styles from './Content.module.scss';
import Aboutme from './sections/Aboutme';
import Backgrounds from './sections/Backgrounds';

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Aboutme />
        <Backgrounds />
      </div>
    </div>
  );
};

export default Content;
