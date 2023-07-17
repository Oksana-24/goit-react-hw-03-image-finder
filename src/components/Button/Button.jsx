import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
