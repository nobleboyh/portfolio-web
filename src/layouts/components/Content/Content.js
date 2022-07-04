import styles from './Content.module.scss';
import Aboutme from './sections/Aboutme';

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Aboutme />
        <h1>Backgrounds</h1>
      </div>
    </div>
  );
};

export default Content;
