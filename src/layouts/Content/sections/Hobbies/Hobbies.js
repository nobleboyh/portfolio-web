import styles from './Hobbies.module.scss';
import { hobbies } from '~/assets/images';
import { useState, useEffect, useContext, useRef } from 'react';
import ImageView from '~/shared-components/ImageView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { MainContext } from '~/layouts/Content';

const visibleDistance = 800; //px
const Hobbies = () => {
  const [activeImg, setActiveImg] = useState(null);
  const parent = useContext(MainContext);
  const imageCollection = useRef();
  useEffect(() => {
    reveal();
    parent.current.addEventListener('scroll', reveal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function reveal() {
    let windowHeight = parent.current.scrollTop;
    let elementTop = imageCollection.current.offsetTop - parent.current.offsetTop;

    if (elementTop < windowHeight + visibleDistance) {
      console.log('done');
      addAnimation();
    } else {
      removeAnimation();
    }
  }

  function addAnimation() {
    if (!imageCollection.current.classList.contains(styles.slideIn)) {
      imageCollection.current.classList.add(styles.slideIn);
    }
  }

  function removeAnimation() {
    if (imageCollection.current.classList.contains(styles.slideIn)) {
      imageCollection.current.classList.remove(styles.slideIn);
    }
  }
  const handleOpenImageModal = (src) => {
    setActiveImg(src);
  };

  const handleExitModal = () => {
    setActiveImg(null);
  };
  return (
    <section className={styles.wrapper} id="hobbies" ref={imageCollection}>
      <h3>Well...</h3>
      <h1>
        I'm an <span style={{ color: 'var(--primary-color)' }}>amateur photographer</span> too{' '}
        <FontAwesomeIcon icon={faFaceLaughBeam} />
      </h1>
      <h2>and some of my works: </h2>

      <div className={styles.collection}>
        {hobbies.map((imgSrc, index) => (
          <div className={styles.imgContainer} key={index}>
            <img
              src={imgSrc}
              alt={`img${index}`}
              className={styles.work}
              onClick={() => handleOpenImageModal(imgSrc)}
            />
          </div>
        ))}
      </div>

      {activeImg && <ImageView src={activeImg} onExit={handleExitModal}></ImageView>}
    </section>
  );
};

export default Hobbies;
