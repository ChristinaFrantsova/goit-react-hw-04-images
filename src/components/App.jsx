import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import getImagesApi from '../api/api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  // componentDidUpdate(_, prevState) {
  //   const { searchValue, page } = this.state;
  //   if (
  //     (prevState.searchValue !== searchValue && searchValue) ||
  //     prevState.page !== page
  //   ) {
  //     this.getSearchedImages();
  //   }
  // }

  const getSearchedImages = async () => {
    setIsLoading(true);
    try {
      const data = await getImagesApi(searchValue, page);
      setImages([...images, ...data.hits]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchValue === '' ? setImages([]) : getSearchedImages();
  }, [searchValue, page]);

  //  const onSearch = searchValue => {
  //     this.setState({
  //       page: 1,
  //       searchValue,
  //       images: [],
  //     });
  //   };

  const onSearch = searchValue => {
    setPage(1);
    setSearchValue(searchValue);
    setImages([]);
  };

  //  const onLoadMore = () => {
  //     this.setState(prevState => ({
  //       page: prevState.page + 1,
  //     }));
  //   };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  //  const modalOpen = largeImageURL => {
  //     this.setState({ isModalOpen: true, largeImageURL: largeImageURL });
  //  };

  const modalOpen = largeImageURL => {
    setIsModalOpen(true);
    setLargeImageURL(largeImageURL);
  };

  const modalClose = () => {
    setIsModalOpen(false);
    setLargeImageURL('');
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSearch} />
      {images && <ImageGallery images={images} modalOpen={modalOpen} />}

      {images.length >= 12 && <Button onLoadMore={onLoadMore} />}
      {isLoading && <Loader />}
      {isModalOpen && (
        <Modal largeImageURL={largeImageURL} modalClose={modalClose} />
      )}
    </div>
  );
};
