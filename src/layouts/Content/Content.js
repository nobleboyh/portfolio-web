/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { createContext, useEffect, useRef } from 'react';
import styles from './Content.module.scss';
import Aboutme from './sections/Aboutme';
import Backgrounds from './sections/Backgrounds';
import Experiences from './sections/Experiences';
import Hobbies from './sections/Hobbies/';
import Contact from './sections/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';
export const MainContext = createContext();
const Content = () => {
  const wrapperRef = useRef();
  useEffect(() => {
    document.getElementById(styles.toTop).style.display = 'none';
    wrapperRef.current.addEventListener('scroll', () => {
      //After 1234px => Active the button
      if (wrapperRef.current.scrollTop > 1234) {
        document.getElementById(styles.toTop).style.display = 'flex';
      } else {
        document.getElementById(styles.toTop).style.display = 'none';
      }
    });
  }, []);

  return (
    <MainContext.Provider value={wrapperRef}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <a id="top" href=""></a>
        <a href="#top" id={styles.toTop}>
          <FontAwesomeIcon icon={faArrowsUpToLine} />
        </a>
        <div className={styles.container}>
          <Aboutme />
          <Backgrounds />
          <Experiences />
          <Hobbies />
          <Contact />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Content;
