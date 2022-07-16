import { useState } from 'react';
import ThankYouModal from '~/shared-components/ThankYouModal';
import styles from './Contact.module.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleDownload = (e) => {
    e.preventDefault();
    window.location.replace('https://drive.google.com/file/d/1Zhs3cvFGa9D31vKr87nMJt8ZZHYB7nP9/view?usp=sharing');
  };
  const handlePostMessage = (e) => {
    e.preventDefault();
    let data = {
      name: email,
      content: content,
    };

    fetch('https://62c6804b2b03e73a58ceb8a9.mockapi.io/api/post-info/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    //Reset
    setEmail('');
    setContent('');

    //Open notification
    setIsOpenModal(true);
  };
  const handleExitModal = (e) => {
    e.preventDefault();
    setIsOpenModal(false);
  };
  return (
    <section className={styles.wrapper} id="contact">
      {isOpenModal && (
        <ThankYouModal title="Message sent successfully" onExit={handleExitModal}>
          I got you message. Thanks!
        </ThankYouModal>
      )}
      <div className={styles.container}>
        <h1>Contact me</h1>
        <form className={styles.form}>
          <label htmlFor="email">Your email</label>
          <input
            placeholder="example@email.com"
            name="email"
            id={styles.email}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="email">Your message</label>
          <textarea
            placeholder="I'd like to work with you..."
            name="content"
            id={styles.content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={(e) => handlePostMessage(e)}>Text me</button>
          <p>or</p>
          <button id={styles.download} onClick={(e) => handleDownload(e)} href="">
            Download my CV
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
