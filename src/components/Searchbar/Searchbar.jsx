import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onInputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchValue);
    this.reset();
  };

  reset = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <FcSearch className={css.Icon} />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
