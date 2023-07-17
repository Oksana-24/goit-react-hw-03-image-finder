import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

import * as Api from './services/api';

import Notiflix from 'notiflix';

class App extends Component {
  state = {
    q: '',
    page: 1,
    perPage: 12,
    images: [],
    isLoading: false,
    showModal: false,
    modalUrl: '',
  };

  componentDidUpdate(_, prevState) {
    const { q, page } = this.state;

    if (prevState.q !== q || prevState.page !== page) {
      this.setState({ isLoading: true });
      this.getImage(this.state.q, this.state.page, this.state.perPage);
    }

    window.scrollBy(0, window.innerHeight);
  }
  getImage = async (name, page, perpage) => {
    try {
      const images = await Api.getImages(name, page, perpage);
      if (!images.length) {
        Notiflix.Notify.failure(
          `Sorry, there are no images matching your search query "${name}". Please try again.`
        );
      }
      this.setState(prev => ({
        images: [...prev.images, ...images],
      }));
    } catch (error) {
      console.log('error');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = name => {
    if (this.state.q === name) {
      Notiflix.Notify.info(
        `Your request "${name}" has already been completed! :-)`
      );
      console.log('yess');
      return;
    }
    this.setState({ images: [], q: name, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleModalOpen = url => {
    this.setState({ modalUrl: url });
  };

  render() {
    const { images, isLoading, showModal, modalUrl } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length > 0 && (
          <ImageGallery
            images={images}
            openModal={this.toggleModal}
            modalUrl={this.handleModalOpen}
          />
        )}

        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button loadMore={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal modalImg={modalUrl} onClose={this.toggleModal}>
            <img src={modalUrl} alt={images.tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
