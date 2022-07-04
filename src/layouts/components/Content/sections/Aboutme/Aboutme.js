import styles from '../../Content.module.scss';
import images from '~/assets/images';
import CoffeeCup from '~/layouts/CoffeeCup';
const Aboutme = () => {
  return (
    <section id="aboutme" className={styles.aboutme}>
      <img src={images.avatar} alt="avatar" className={styles.avatar} />
      <p>Hello, my name is</p>
      <h1>
        <u>Hoang</u> Bui Tien
      </h1>
      <h3>
        And I'm a <span>Software Developer</span>
      </h3>
      <p>
        Thank you for your interest in my resume. <br />
        Let's have a sip and take a walk through my website.
      </p>
      <div className={styles.coffee}>
        <CoffeeCup />
      </div>
    </section>
  );
};

export default Aboutme;
