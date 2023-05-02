// import propTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <FcSearch className={css.Icon} />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
