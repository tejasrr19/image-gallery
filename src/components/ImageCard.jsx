import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ image, length }) => {
  const { len } = length;
  const { index, url, caption } = image;
  return (
    <div id={`image-card-${index}`} className="image-card caption-card">
      <img src={url} alt={"Image not available"} />
      <div className="caption">{caption}</div>
      <div className="number">{`${index + 1} / ${length}`}</div>
    </div>
  );
};

export default ImageCard;
