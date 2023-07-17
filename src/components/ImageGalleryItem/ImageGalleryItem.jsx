import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, openModal, getModalUrl }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => getModalUrl(image.largeImageURL)}
    >
      <img
        className={css.ImageGalleryItem_image}
        src={image.webformatURL}
        alt={image.tags}
        onClick={openModal}
      />
    </li>
  );
};
