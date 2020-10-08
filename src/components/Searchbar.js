import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  heandleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchOnSumit(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.heandleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.inputValue}
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  inputValue: PropTypes.string,
};
