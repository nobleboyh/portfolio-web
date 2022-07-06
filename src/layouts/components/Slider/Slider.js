import { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
const Slider = ({ children, className }) => {
  const containerRef = useRef();

  const moveSlide = useRef();
  const [activeState, setActiveState] = useState(0);
  useEffect(() => {
    containerRef.current.style.setProperty('--number-of-items', children.length);
  }, [children]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveState((prev) => (prev + 1) % children.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    slideChange();
    // eslint-disable-next-line
  }, [activeState]);
  // const checkIfActive = (index) => {
  //   return index === activeState;
  // };
  const slideChange = () => {
    let width = moveSlide.current.offsetWidth;
    moveSlide.current.style.marginLeft = `${-activeState * width}px`;
    moveSlide.current.style.transitionDuration = '0.5s';
  };

  const handleChange = (index) => {
    setActiveState(index);
  };

  return (
    <div className={[styles.wrapper, className].join(' ')} ref={containerRef}>
      <div className={styles.container}>
        {children.map((item, index) => {
          return (
            <input
              key={`button${index}`}
              type="radio"
              className={styles.select}
              name={styles.select}
              id={styles[`pagi${index}`]}
              value={index}
            ></input>
          );
        })}
        {children.map((item, index) => {
          return (
            <div
              className={[styles.slide, styles[`slide${index}`]].join(' ')}
              key={`slide${index}`}
              ref={index === 0 ? moveSlide : null}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className={styles.navigation}>
        {children.map((item, index) => {
          return (
            <label
              key={`label${index}`}
              htmlFor={styles[`pagi${index}`]}
              className={cx('bar', { [styles.barActive]: activeState === index })}
              onClick={() => handleChange(index)}
            ></label>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
