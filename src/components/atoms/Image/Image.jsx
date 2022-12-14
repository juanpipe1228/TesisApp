import React from "react";

import "./style.css";
export default function Image(props) {
  const {
    src,
    alt,
    style = {},
    className = "",
    rounded,
    circle,
    thumbnail,
  } = props;
  const classRounded = rounded ? "img-rounded" : "";
  const classCircle = circle ? "img-circle" : "";
  const classThumbnail = thumbnail ? "img-thumbnail" : "";

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={`image-stl ${className} ${classRounded} ${classCircle} ${classThumbnail}`}
    />
  );
}
