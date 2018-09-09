import React, { Component } from "react";
import "./App.css";
import imageData from "./data/imageData.js";
import PhotoGallery from "./components/PhotoGallery.jsx";

class App extends Component {
  render() {
    return <PhotoGallery data={imageData} />;
  }
}

export default App;
