import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./components/Spinner";
import imagesApi from "./services/imagesApi";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    loading: false,
    error: null,
    largeImageUrl: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesArticle(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  heandleSearchSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  heandleOpenModal = (imageUrl) => {
    this.setState({ largeImageUrl: imageUrl });
  };

  heandleCloseModal = () => {
    this.setState({ largeImageUrl: null });
  };

  render() {
    const { loading, images, largeImageUrl } = this.state;
    return (
      <>
        <Searchbar fetchOnSumit={this.heandleSearchSubmit} />
        {images.length > 0 && (
          <InfiniteScroll
            dataLength={images.length}
            next={this.fetchImages}
            hasMore={true}
            loader={loading && <Spinner />}
          >
            <ImageGallery images={images} openModal={this.heandleOpenModal} />
          </InfiniteScroll>
        )}

        {images.length > 0 && <Button fetchImages={this.fetchImages} />}
        {largeImageUrl && <Spinner />}
        {largeImageUrl && (
          <Modal
            largeImageUrl={largeImageUrl}
            onClose={this.heandleCloseModal}
          />
        )}
      </>
    );
  }
}
