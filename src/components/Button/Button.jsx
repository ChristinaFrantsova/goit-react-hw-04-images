// import propTypes from 'prop-types';
import css from './Button.module.css';

const Button = () => {
  return (
    <div className={css.ButtonWraper}>
      <button type="button" className={css.Button}>
        Load more
      </button>
    </div>
  );
};

export default Button;
