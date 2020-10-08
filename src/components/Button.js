import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  render() {
    return (
      <button className="Button" type="submit" onClick={this.props.fetchImages}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};
