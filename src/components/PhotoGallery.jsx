import React, { Component } from "react";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.data
    };
  }

  render() {
    console.log(this.state.images);
    return <div>Hello!!!</div>;
  }
}

export default PhotoGallery;
