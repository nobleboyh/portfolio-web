import styles from '../../Content.module.scss';
import images from '~/assets/images';
import { Accordion, AccordionItem } from '~/layouts/components/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useRef } from 'react';
const Backgrounds = () => {
  const accordionItemRef = useRef([]);
  const educationRef = useRef();

  useEffect(() => {
    accordionItemRef.current.at(0).active();
    console.log('Angle Cal', educationRef.current.getBoundingClientRect());
  }, []);
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    // Use event.pageX / event.pageY here
    let boundingRect = educationRef.current.getBoundingClientRect();
    let limitX = boundingRect.width / 2;
    let limitY = boundingRect.height / 2;
    let centerY = (boundingRect.left + boundingRect.right) / 2;
    let centerX = (boundingRect.top + boundingRect.bottom) / 2;
    let diffX =
      (event.pageX - centerY) / limitX > 1
        ? 1
        : (event.pageX - centerY) / limitX < -1
        ? -1
        : (event.pageX - centerY) / limitX;

    let diffY =
      (event.pageY - centerX) / limitY > 1
        ? 1
        : (event.pageY - centerX) / limitY < -1
        ? -1
        : (event.pageY - centerX) / limitY;

    let boxShadow = `${-diffX}rem ${-diffY}rem 50px 0.5rem var(--primary-background-color) inset, 0 0 20px 2px var(--primary-background-color)`;
    educationRef.current.style.boxShadow = boxShadow;
  }

  const handleActive = (index) => {
    accordionItemRef.current.at(index).active();
    accordionItemRef.current.filter((item, idx) => idx !== index).forEach((item) => item.deactive());
  };

  return (
    <section className={styles.backgrounds} id="backgrounds">
      <div className={styles.educationWrapper}>
        <h1>Education</h1>
        <img src={images.hust} alt="HUST logo" />
        <div className={styles.education} ref={educationRef}>
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
          detail="First held in 1997 and maintained annually,
           Toyota Technical Scholarship is one of the four main activities of Toyota Vietnam in the fields of education, training and human resource development."
        />
        <AccordionItem
          index={1}
          handleActive={handleActive}
          ref={(el) => (accordionItemRef.current[1] = el)}
          title='Awarded "NITORI Scholarship" (NITORI Company)'
          detail="NITORI Scholarship held by International Nitori Scholarship Fund, used for Technical students with impressive education achiements in year."
        />
        <AccordionItem
          index={2}
          handleActive={handleActive}
          ref={(el) => (accordionItemRef.current[2] = el)}
          title="Awarded 9/10 HUST semester scholarships"
          detail="HUST scholarships founded by HUST, with the purpose is to encourage and recognize the academic and research achievements of students each term."
        />
      </Accordion>
    </section>
  );
};

export default Backgrounds;
