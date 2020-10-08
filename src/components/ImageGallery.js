import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem
          images={this.props.images}
          openModal={this.props.openModal}
        />
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func,
};
