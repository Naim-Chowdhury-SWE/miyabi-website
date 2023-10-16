import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './ImageModal.css';

const ImageModal = ({ image, title, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="image-modal"
      overlayClassName="image-modal-overlay"
    >
    <img
        src={image}
        alt={title}
        onClick={onRequestClose}
        className="modal-image"/>
    </Modal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ImageModal;
