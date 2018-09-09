import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ image }) => {
  const { _id, url, caption } = image;

  return (
    <div id={`imageCard-${_id}`} className="image-card">
      <div className="caption">{caption}</div>
      <img src={url} alt={"Image not available"} />
    </div>
  );
};

export default ImageCard;
