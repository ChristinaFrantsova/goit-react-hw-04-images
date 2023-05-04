import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import getImagesApi from './api/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    isModalOpen: false,
    largeImageURL: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    if (
      (prevState.searchValue !== searchValue && searchValue) ||
      prevState.page !== page
    ) {
      this.getSearchedImages();
    }
  }
  getSearchedImages = async () => {
    const { searchValue, page } = this.state;
    this.setState({ isLoading: true });
    try {
      const data = await getImagesApi(searchValue, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSearch = searchValue => {
    this.setState({
      loadMore: false,
      page: 1,
      searchValue,
      images: [],
    });
  };

  // onSearch = searchValue => {
  //   this.setState(prevState => {
  //     if (searchValue === this.state.searchValue) {
  //       return prevState;
  //     }
  //     return { searchValue, page: 1, images: [] };
  //   });
  // };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  modalOpen = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL: largeImageURL });
  };

  modalClose = () => {
    this.setState({ isModalOpen: false, largeImageURL: '' });
  };

  render() {
    // console.log(this.state.searchValue);
    const { images, isLoading, isModalOpen, largeImageURL } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery images={images} modalOpen={this.modalOpen} />

        {images.length >= 12 && <Button onLoadMore={this.onLoadMore} />}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal largeImageURL={largeImageURL} modalClose={this.modalClose} />
        )}
      </div>
    );
  }
}
