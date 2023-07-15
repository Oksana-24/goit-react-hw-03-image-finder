import { Component } from 'react';
import css from './Searchbar.module.css';
import { BiSearchAlt } from 'react-icons/bi';

class Searchbar extends Component {
  state = { name: '' };

  handleChange = ({ target }) => {
    this.setState({ name: target.value });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
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

export default Searchbar;
