import { createContext, useRef } from 'react';
import styles from './Content.module.scss';
import Aboutme from './sections/Aboutme';
import Backgrounds from './sections/Backgrounds';
import Experiences from './sections/Experiences';

export const MainContext = createContext();
const Content = () => {
  const wrapperRef = useRef();

  return (
    <MainContext.Provider value={wrapperRef}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.container}>
          <Aboutme />
          <Backgrounds />
          <Experiences />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default Content;
