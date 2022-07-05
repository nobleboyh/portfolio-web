import { useEffect, useRef } from 'react';
import styles from './Slider.module.scss';

const Slider = ({ children }) => {
  const containerRef = useRef();
  useEffect(() => {
    console.log(children.length);
    containerRef.current.style.setProperty('--number-of-items', children.length);
  }, [children]);
  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.container}>
        {children.map((item, index) => {
          return (
            <>
              <input
                key={index}
                type="radio"
                className={styles.select}
                name={styles.select}
                id={styles[`pagi${index}`]}
              ></input>
              <div className={[styles.slide, styles[`slide${index}`]].join(' ')}>{item}</div>
            </>
          );
        })}
      </div>
      <div className={styles.navigation}>
        {children.map((item, index) => {
          return <label htmlFor={styles[`pagi${index}`]} className={styles.bar}></label>;
        })}
      </div>
    </div>
  );
};

export default Slider;
