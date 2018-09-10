import React, { Component } from "react";
import imageData from "./data/imageData.js";
import PhotoGallery from "./components/PhotoGallery.jsx";
import "./stylesheets/landing-page.scss";

class App extends Component {
  render() {
    return (
      <div className="page">
        <section>
          <h1> A Simple Photo Gallery Component</h1>
        </section>
        <PhotoGallery data={imageData} />
      </div>
    );
  }
}

export default App;
