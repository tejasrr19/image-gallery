import React, { Component } from "react";
import ImageCard from "./ImageCard.jsx";
import "../stylesheets/photo-gallery.scss";
import { Button, Glyphicon } from "react-bootstrap";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      images: props.data,
      image: props.data[0]
    };
  }

  nextImage = () => {
    const { image, images } = this.state;
    if (image.index !== images.length - 1) {
      const newIndex = this.state.image.index + 1;
      this.setState({
        image: this.state.images[newIndex]
      });
    }
  };

  prevImage = () => {
    const { image, images } = this.state;
    if (image.index !== 0) {
      const newIndex = this.state.image.index - 1;
      this.setState({
        image: this.state.images[newIndex]
      });
    }
  };

  render() {
    const { images, image } = this.state;
    console.log(this.state.images);
    return (
      <div className="photo-gallery">
        <a className="prev" onClick={() => this.prevImage()}>
          &#10094;
        </a>
        <a className="next" onClick={() => this.nextImage()}>
          &#10095;
        </a>
        <div className="col">
          <div className={`images-slider active-slide-${image.index}`}>
            <div
              className="images-slider-wrapper"
              style={{
                transform: `translateX(-${image.index *
                  (100 / images.length)}%)`
              }}
            >
              {images.map(image => (
                <ImageCard
                  key={image.index}
                  image={image}
                  length={images.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
