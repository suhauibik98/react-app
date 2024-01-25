import React from "react";
import { Link } from "react-router-dom";
import p1 from "../../src/images/gemba/Landingpage/Artboard1.png";
import p2 from "../../src/images/gemba/Landingpage/Artboard2.png";
import p2L from "../../src/images/gemba/Landingpage/Artboard2L.png";
import main from "../../src/images/gemba/Landingpage/Asset.png";
import Lazyload from "../components/Lazyload";

import "react-lazy-load-image-component/src/effects/blur.css";
import { useLock } from "../context/lockState";
const Learn = () => {
  const { unLock, GEMBA_UNLOCK } = useLock();
   var contant = (
    <Link>
      <img src={p2} className="" alt="6" />
    </Link>
    
);
  if(unLock){
      contant = <Link to="/GembaQustion">
      <img src={p2L} className="" alt="6" />
    </Link>
    }
  return (
    <>
      <div className="container flex h-full justify-center items-center relative">
        <div className="flex gap-80 justify-center items-center">
          <Link to="/VideoGemba">
            <img src={p1} onClick={GEMBA_UNLOCK} className="" alt="6" />
          </Link>
          {contant}
        </div>
        <div className="absolute bottom-36 -z-10">
          <Lazyload src={main} alt="6" />
        </div>
      </div>
    
    </>
  );
};

export default Learn;
