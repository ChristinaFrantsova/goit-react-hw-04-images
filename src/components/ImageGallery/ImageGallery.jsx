import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, modalOpen }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              modalOpen={modalOpen}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  modalOpen: PropTypes.func.isRequired,
};

export default ImageGallery;

// const ImageGallery = ({ images, modalOpen }) => {
//   return (
//     <>
//       <ul className={css.ImageGallery}>
//         {images.map((image, index) => {
//           return (
//             <ImageGalleryItem key={index} image={image} modalOpen={modalOpen} />
//           );
//         })}
//       </ul>
//     </>
//   );
// };
