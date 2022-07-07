/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { createContext, useRef } from 'react';
import styles from './Content.module.scss';
import Aboutme from './sections/Aboutme';
import Backgrounds from './sections/Backgrounds';
import Experiences from './sections/Experiences';
import Hobbies from './sections/Hobbies/';
import Contact from './sections/Contact';
export const MainContext = createContext();
const Content = () => {
  const wrapperRef = useRef();

  return (
    <MainContext.Provider value={wrapperRef}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <a id="top" href=""></a>
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
