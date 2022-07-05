import styles from '../../Content.module.scss';
import images from '~/assets/images';
import { Accordion, AccordionItem } from '~/layouts/components/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useRef } from 'react';
const Backgrounds = () => {
  const accordionItemRef = useRef([]);

  const handleActive = (index) => {
    accordionItemRef.current.at(index).active();
    accordionItemRef.current.filter((item, idx) => idx !== index).forEach((item) => item.deactive());
  };
  return (
    <section className={styles.backgrounds} id="backgrounds">
      <div className={styles.educationWrapper}>
        <h1>Education</h1>
        <img src={images.hust} alt="HUST logo" />
        <div className={styles.education}>
          <h3>
            Hanoi University of Science and Technology <br></br>
            Major: Mechatronics <br />
          </h3>
          <p>
            <b>CPA: </b> 3.57/4.0{' '}
            <Tippy content="I got a Good Degree, but soooo close to Excellent which is 3.6/4.0." placement="right">
              <span className={styles.hintIcon}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </Tippy>
            <br />
            <b>TOEIC: </b> 955/990
            <Tippy
              content="The TOEIC ® Listening and Reading test is a fair and valid assessment of English-language listening and reading skills for the workplace. "
              placement="right"
            >
              <span className={styles.hintIcon}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </Tippy>
          </p>
        </div>
      </div>

      <h1>Achievements</h1>
      <Accordion className={styles.achievements}>
        <AccordionItem
          index={0}
          handleActive={handleActive}
          ref={(el) => (accordionItemRef.current[0] = el)}
          title="Awarded Toyota Scholarship"
          detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio a
          met ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        />
        <AccordionItem
          index={1}
          handleActive={handleActive}
          ref={(el) => (accordionItemRef.current[1] = el)}
          title='Awarded "NITORI Scholarship" (NITORI Company)'
          detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio a
          met ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        />
        <AccordionItem
          index={2}
          handleActive={handleActive}
          ref={(el) => (accordionItemRef.current[2] = el)}
          title="Awarded 9/10 HUST semester scholarships"
          detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio a
          met ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        />
      </Accordion>
    </section>
  );
};

export default Backgrounds;
