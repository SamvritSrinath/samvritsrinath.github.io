import {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import Modal from '../components/Modal';

const ContactContainer = styled.div`
  padding: 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 2rem auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({theme}) => theme.accent};
  margin-bottom: 1rem;
  margin-top: 0;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({theme}) => theme.subtext};
  margin-bottom: 3rem;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.headerBorder};
  background: ${({theme}) => theme.cardBg};
  color: ${({theme}) => theme.text};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.headerBorder};
  background: ${({theme}) => theme.cardBg};
  color: ${({theme}) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background: ${({theme}) => theme.accent};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Contact = ({theme}) => {
  const form = useRef();
  const [modalInfo, setModalInfo] = useState({
    show: false,
    title: '',
    message: '',
  });

  const handleCloseModal = () =>
    setModalInfo({show: false, title: '', message: ''});

  const sendEmail = e => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      result => {
        console.log(result.text);
        setModalInfo({
          show: true,
          title: 'Success!',
          message: 'Your message has been sent successfully.',
        });
        form.current.reset();
      },
      error => {
        console.log(error.text);
        setModalInfo({
          show: true,
          title: 'Error',
          message: 'Failed to send message. Please try again later.',
        });
      },
    );
  };

  return (
    <>
      <Modal
        show={modalInfo.show}
        handleClose={handleCloseModal}
        title={modalInfo.title}
        message={modalInfo.message}
      />
      <ContactContainer>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.5}}>
          <SectionTitle>Get In Touch</SectionTitle>
          <Subtitle>
            Have a question or want to work together? Leave your details and
            I&apos;ll get back to you as soon as possible.
          </Subtitle>
        </motion.div>

        <Form
          ref={form}
          onSubmit={sendEmail}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}>
          <Input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            theme={theme}
          />
          <Input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            theme={theme}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            required
            theme={theme}
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ContactContainer>
    </>
  );
};

Contact.propTypes = {
  content: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.object.isRequired,
};

export default Contact;
