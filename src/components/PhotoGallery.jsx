import React, { Component } from "react";
import ImageCard from "./ImageCard.jsx";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.data
    };
  }

  render() {
    const { images } = this.state;
    console.log(this.state.images);
    return (
      <div>
        {images.map(image => <ImageCard key={image._id} image={image} />)}
      </div>
    );
  }
}

export default PhotoGallery;
