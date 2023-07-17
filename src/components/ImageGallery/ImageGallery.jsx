import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal, modalUrl }) => {
  return (
    console.log('images', images),
    (
      <ul className={css.ImageGallery}>
        {images?.length > 0 &&
          images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={openModal}
              getModalUrl={modalUrl}
            />
          ))}
      </ul>
    )
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  modalUrl: PropTypes.func.isRequired,
};
