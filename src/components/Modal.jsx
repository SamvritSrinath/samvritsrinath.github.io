import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/glass/GlassCard';
import { GlassButton } from '@/components/glass/GlassButton';

const Modal = ({ show, handleClose, title, message }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: '-50px', opacity: 0 },
    visible: { y: '0', opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[200]"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <motion.div
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full mx-4"
          >
            <GlassCard variant="heavy" className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
              <p className="text-foreground mb-8">{message}</p>
              <GlassButton variant="primary" onClick={handleClose}>
                Close
              </GlassButton>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;
