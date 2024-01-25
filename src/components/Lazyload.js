import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Lazyload = ({ src ,onClick }) => {
  return (
    <>
      <LazyLoadImage src={src} effect="blur" alt="mian" onClick ={()=>onClick}/>
    </>
  );
};

export default Lazyload;
