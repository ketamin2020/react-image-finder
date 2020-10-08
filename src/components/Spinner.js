import React, { Component } from "react";
import Loader from "react-loader-spinner";
export default class Spinner extends Component {
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />;
        </div>
      </div>
    );
  }
}
