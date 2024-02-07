import React from "react";
import video from "../../images/Gemba66.mp4";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import gif from "../../images/button/Next.gif";
import Lazyload from "../../components/Lazyload";
const VideoGemba = () => {
  return (
    <>
        <LazyLoadComponent>
      <div className=" relative w-full h-full">
          <video className="w-full h-full" controls>
            <source src={video} type="video/mp4" />
          </video>
         <Link to="/GambaBar">
            <div  className="absolute bottom-[15%] left-[92%]" >
              <Lazyload WH={100} Style={"relative right-[6%]"} src={gif} alt="4" />
            </div>
         </Link>
      </div> 
        </LazyLoadComponent>
    </> 
  );
};

export default VideoGemba;
