import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, modalOpen }) => {
  return (
    <li className={css.ImageGalleryItem} id={id}>
      <img
        src={webformatURL}
        alt={largeImageURL}
        className={css.ImageGalleryItemImage}
        onClick={() => modalOpen(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

// const ImageGalleryItem = ({ image, modalOpen }) => {
//   return (
//     <li className={css.ImageGalleryItem} id={image.id}>
//       <img
//         src={image.webformatURL}
//         alt=""
//         className={css.ImageGalleryItemImage}
//         onClick={() => modalOpen(image.largeImageURL)}
//       />
//     </li>
//   );
// };
