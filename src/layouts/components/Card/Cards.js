import styles from './Card.module.scss';
import { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { MainContext } from '~/layouts/Content/';
let cx = classNames.bind(styles);
const visibleDistance = 800;
const Cards = ({ children, className, slideIn = true }) => {
  const cardRefs = useRef([]);
  const cardContainer = useRef();
  const parent = useContext(MainContext);
  const classes = cx(className, styles.parentWrapper);

  useEffect(() => {
    if (!slideIn) {
      return;
    }
    reveal();
    parent.current.addEventListener('scroll', reveal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function reveal() {
    let windowHeight = parent.current.scrollTop;
    let elementTop = cardContainer.current.offsetTop - parent.current.offsetTop;

    if (elementTop < windowHeight + visibleDistance) {
      addAnimation();
    } else {
      removeAnimation();
    }
  }

  function addAnimation() {
    cardRefs.current.forEach((card) => {
      if (slideIn) {
        if (!card.classList.contains(styles.slideIn)) {
          card.classList.add(styles.slideIn);
        }
      }
    });
  }

  function removeAnimation() {
    cardRefs.current.forEach((card) => {
      if (slideIn) {
        if (card.classList.contains(styles.slideIn)) {
          card.classList.remove(styles.slideIn);
        }
      }
    });
  }

  return (
    <div className={classes} ref={cardContainer}>
      {children.map((item, index) => {
        return (
          <div key={index} ref={(r) => (cardRefs.current[index] = r)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
