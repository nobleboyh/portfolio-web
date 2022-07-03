import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <a href="#3">
        <h1>3</h1>
      </a>
      <section id="1">Aboutme1</section>
      <section id="2">Aboutme2</section>
      <section id="3">Aboutme3</section>
      <section id="4">Aboutme4</section>
      <section id="5">Aboutme5</section>
      <section id="6">Aboutme6</section>
    </div>
  );
};

export default Content;
