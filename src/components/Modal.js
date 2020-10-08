import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
    window.addEventListener("click", this.handleCloseModalonClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
    window.removeEventListener("click", this.handleCloseModalonClick);
  }

  handleCloseModalonClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.props.onClose();
    }
  };

  handleCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImageUrl} alt="Pixabay" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImageUrl: PropTypes.string,
};
