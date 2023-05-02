// import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const ImageGallery = () => {
  return (
    <>
      <ul className={css.ImageGallery}>
        <ImageGalleryItem></ImageGalleryItem>
      </ul>
      <Button />
      {/* <Modal /> */}
    </>
  );
};

export default ImageGallery;
