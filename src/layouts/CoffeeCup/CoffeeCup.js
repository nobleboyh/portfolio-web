import styles from './CoffeCup.module.scss';

const CoffeeCup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cup}>
        <div className={styles.top}>
          <div className={styles.vapour}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.circle}>
            <div className={styles.tea}></div>
          </div>
        </div>
        <div className={styles.handle}></div>
      </div>
      <div className={styles.plate}></div>
      <div className={styles.table}></div>
    </div>
  );
};

export default CoffeeCup;
