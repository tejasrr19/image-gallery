import React, { Component } from "react";
import ImageCard from "./ImageCard.jsx";
import "../stylesheets/photogallery.scss";

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
    const newIndex = this.state.image.index + 1;
    this.setState({
      image: this.state.images[newIndex]
    });
  };

  prevImage = () => {
    const newIndex = this.state.image.index - 1;
    this.setState({
      image: this.state.images[newIndex]
    });
  };

  render() {
    const { images, image } = this.state;
    console.log(this.state.images);
    return (
      <div className="photo-gallery">
        <button
          onClick={() => this.nextImage()}
          disabled={image.index === this.state.images.length - 1}
        >
          Next
        </button>
        <button onClick={() => this.prevImage()} disabled={image.index === 0}>
          Prev
        </button>
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
                <ImageCard key={image.index} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
