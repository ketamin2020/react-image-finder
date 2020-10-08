import React, { Component } from "react";
import PropTypes from "prop-types";
export default class ImageGalleryItem extends Component {
  render() {
    return this.props.images.map(
      ({ id, webformatURL, type, largeImageURL }) => (
        <li
          className="ImageGalleryItem"
          onClick={() => this.props.openModal(largeImageURL)}
          key={id}
        >
          <img
            src={webformatURL}
            alt={type}
            className="ImageGalleryItem-image"
          />
        </li>
      )
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      type: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  openModal: PropTypes.func,
};
