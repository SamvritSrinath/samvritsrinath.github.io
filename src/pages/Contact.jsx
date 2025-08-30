import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Modal from '../components/Modal';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.subtext};
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
  border: 1px solid ${({ theme }) => theme.headerBorder};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.headerBorder};
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.subtext};
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.1);
  }
`;

const Contact = ({ content }) => {
  const form = useRef();
  const [modalInfo, setModalInfo] = useState({ show: false, title: '', message: '' });
  const { linkedin, github } = content;

  const handleCloseModal = () => setModalInfo({ show: false, title: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setModalInfo({ show: true, title: 'Success!', message: 'Your message has been sent successfully.' });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setModalInfo({ show: true, title: 'Error', message: 'Failed to send message. Please try again later.' });
      });
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Get In Touch</SectionTitle>
          <Subtitle>
            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
          </Subtitle>
        </motion.div>

        <Form ref={form} onSubmit={sendEmail} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Input type="text" name="user_name" placeholder="Your Name" required />
          <Input type="email" name="user_email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>

        <SocialLinks initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <SocialIcon href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
          <SocialIcon href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
        </SocialLinks>
      </ContactContainer>
    </>
  );
};

export default Contact;