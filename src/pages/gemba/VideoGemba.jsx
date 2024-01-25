import React from "react";
import video from "../../images/Gemba66.mp4";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import gif from "../../images/gemba/Landingpage/button-04.gif";
const VideoGemba = () => {
  return (
    <>
      <div className=" relative w-full">
        <LazyLoadComponent>
          <video className="w-full h-screen" controls>
            <source src={video} type="video/mp4" />
          </video>
         <Link to="/GambaBar">
            <div  style={{width:"13%" , height:"13%", bottom:"30px" , position:"absolute" , right:"15px"}}>
              <LazyLoadImage src={gif} style={{ width: "100%" ,height:"50%" }} alt="4" />
            </div>
         </Link>
        </LazyLoadComponent>
      </div> 
    </> 
  );
};

export default VideoGemba;
