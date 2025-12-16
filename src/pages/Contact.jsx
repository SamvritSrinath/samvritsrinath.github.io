import {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import Modal from '@/components/Modal';
import {GlassSection} from '@/components/glass/GlassSection';
import {GlassInput} from '@/components/glass/GlassInput';
import {GlassButton} from '@/components/glass/GlassButton';
import {glassVariants} from '@/lib/animations';

const Contact = ({content, theme}) => {
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
      <GlassSection className="max-w-2xl mx-auto my-8 text-center">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.5}}>
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a question or want to work together? Leave your details and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 mb-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}>
          <GlassInput
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <GlassInput
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="flex w-full rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-xl backdrop-saturate-150 border border-gray-700/30 dark:border-white/10 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 min-h-[150px] resize-y"
          />
          <GlassButton type="submit" variant="primary" className="w-full">
            Send Message
          </GlassButton>
        </motion.form>
      </GlassSection>
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
