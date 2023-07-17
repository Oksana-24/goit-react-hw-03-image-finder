import { Component } from 'react';
import css from './Searchbar.module.css';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = { name: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
      console.log('Please enter name');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <BiSearchAlt size={28} />
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleChange}
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
