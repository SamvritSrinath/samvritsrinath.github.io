import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem 3rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accent};
  margin-top: 0;
`;

const ModalMessage = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const Modal = ({ show, handleClose, title, message }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "-50px", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <ModalBackdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <ModalContent
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
          >
            <ModalTitle>{title}</ModalTitle>
            <ModalMessage>{message}</ModalMessage>
            <CloseButton onClick={handleClose}>Close</CloseButton>
          </ModalContent>
        </ModalBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
