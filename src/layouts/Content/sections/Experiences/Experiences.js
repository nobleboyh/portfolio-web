import styles from '../../Content.module.scss';
import Slider from '~/layouts/components/Slider/';
import SliderItem from '~/layouts/components/Slider/SliderItem';
import Card from '~/layouts/components/Card';
import images from '~/assets/images';
import TechStack from '~/layouts/components/TechStack';
const Experiences = () => {
  return (
    <section className={styles.experiences}>
      <h1>My Experiences</h1>
      <div className={styles.cards}>
        <Card image={images.pana} title={'Washing Machine R&D Engineer'}>
          <ul>
            <li>Embedded developer for Top load series</li>
            <li>Lower parts designer and leader for NA-FD10X1 Series</li>
          </ul>
        </Card>
        <Card image={images.trans} title={'Software Developer'} mainColor={'#FFD2D8'}>
          <ul>
            <li>Incharge of Outsourcing projects</li>
            <li>Contact and discuss with customers</li>
          </ul>
        </Card>
        <Card image={images.code} title={'and maybe more'} mainColor={'lightgray'}></Card>
      </div>
      <div className={styles.techStackWrapper}>
        <h2>My Tech Stack</h2>
        <div className={styles.techStack}>
          <TechStack title="Web">
            <img src={images.html} alt="html"></img>
            <img src={images.css} alt="css"></img>
            <img src={images.js} alt="js"></img>
            <img src={images.react} alt="react"></img>
            <img src={images.asp} alt="asp"></img>
          </TechStack>
          <TechStack title="Mobile">
            <img src={images.swift} alt="swift"></img>
          </TechStack>
          <TechStack title="App & Script">
            <img src={images.winform} alt="winform"></img>
            <img src={images.java} alt="java"></img>
            <img src={images.wpf} alt="wpf"></img>
            <img src={images.vbscript} alt="vbscript"></img>
          </TechStack>
          <TechStack title="Embedded">
            <img src={images.cpp} alt="cpp"></img>
          </TechStack>
          <TechStack title="Management">
            <img src={images.svn} alt="svn"></img>
            <img src={images.git} alt="git"></img>
            <img src={images.backlogs} alt="backlogs"></img>
            <img src={images.outlook} alt="outlook"></img>
            <img src={images.line} alt="line"></img>
            <img src={images.teams} alt="teams"></img>
            <img src={images.hangouts} alt="hangouts"></img>
          </TechStack>
        </div>
      </div>
      <Slider>
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </section>
  );
};

export default Experiences;
