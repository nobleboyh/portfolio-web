import styles from './Card.module.scss';
import { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { MainContext } from '~/layouts/Content/';
let cx = classNames.bind(styles);
const visibleDistance = 600;
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
  }, []);

  function reveal() {
    let windowHeight = parent.current.scrollTop;
    let elementTop = cardContainer.current.offsetTop - parent.current.offsetTop;
    console.log(windowHeight + visibleDistance);
    console.log(elementTop);
    if (elementTop < windowHeight + visibleDistance) {
      console.log('Add');
      addAnimation();
    } else {
      removeAnimation();
    }
  }

  function addAnimation() {
    cardRefs.current.forEach((card) => {
      console.log(card);
      if (slideIn) {
        card.classList.add(styles.slideIn);
      }
    });
  }

  function removeAnimation() {
    cardRefs.current.forEach((card) => {
      if (slideIn) {
        card.classList.remove(styles.slideIn);
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
