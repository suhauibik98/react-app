import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Lazyload = ({ src, onClick: onclick, WH, Style }) => {
  const style = ` ${Style}`;

  return (
    <>
      <LazyLoadImage
        width={`${WH}%`}
        height={`${WH}%`}
        wrapperClassName={style}
        src={src}
        effect="blur"
        alt="mian"
        onClick={onclick}
      />
    </>
  );
};

export default Lazyload;
