import styles from '../../Content.module.scss';
import Slider from '~/layouts/components/Slider/';
import SliderItem from '~/layouts/components/Slider/SliderItem';
import Card from '~/layouts/components/Card';
import { Cards } from '~/layouts/components/Card';
import images from '~/assets/images';
import TechStack from '~/layouts/components/TechStack';
const Experiences = () => {
  return (
    <section className={styles.experiences}>
      <h1>Experiences</h1>
      <Cards className={styles.cards}>
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
      </Cards>
      <div className={styles.techStackWrapper}>
        <h2>Tech Stack</h2>
        <div className={styles.techStack}>
          <TechStack title="Web">
            <img src={images.html} alt="html"></img>
            <img src={images.css} alt="css"></img>
            <img src={images.js} alt="js"></img>
            <img src={images.react} alt="react"></img>
            <img src={images.asp} alt="asp"></img>
            <img src={images.mysql} alt="mysql"></img>
            <img src={images.iis} alt="iis"></img>
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
      <Slider className={styles.slider}>
        <SliderItem
          title="Kawasaki"
          subtitle="iOS App for maintenance center"
          description="Design voice control module"
          image={images.swift}
        ></SliderItem>
        <SliderItem
          title="OSCO"
          subtitle="Production Management Web"
          description={
            <p>
              In charge of FE: HTML, CSS, JS <br />
              Check and modify BE: ASP.Net <br />
              Database: MySQL
              <br />
              In charge of installation: IIS"
            </p>
          }
          image={images.asp}
        ></SliderItem>
        <SliderItem
          title="Denso"
          subtitle="Map Reforming Tool"
          description={<p>Modify algorithms for auto-driven car map</p>}
          image={images.java}
        ></SliderItem>
        <SliderItem
          title="Panasonic"
          subtitle="Embedded Software For Top-load Washing Machine"
          description={
            <p>
              Develope software for Middle East machine series <br /> Get IEC certificate for software{' '}
            </p>
          }
          image={images.cpp}
        ></SliderItem>
        <SliderItem
          title="Graduation Project"
          subtitle="Intergrated System For Screw Nut Defection Detecting"
          description={
            <p>
              Embedded system: STM32F4 (C++ and HAL library) <br />
              Detection system: Python (Yolo and OpenCV) <br />
              Communication by UART
            </p>
          }
          image={images.python}
        ></SliderItem>
      </Slider>
    </section>
  );
};

export default Experiences;
