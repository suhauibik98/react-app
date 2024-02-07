import React from "react";
import { Link } from "react-router-dom";
import p1 from "../../src/images/gemba/Landingpage/Artboard1.png";
import p2 from "../../src/images/gemba/Landingpage/Artboard2.png";
import p2L from "../../src/images/gemba/Landingpage/Artboard2L.png";
import main from "../../src/images/gemba/Landingpage/Asset.png";
import mainbg from "../../src/images/1.jpg";
import Lazyload from "../components/Lazyload";

import "react-lazy-load-image-component/src/effects/blur.css";
import { useLock } from "../context/lockState";
const Learn = () => {
  const { unLock, GEMBA_UNLOCK } = useLock();
  var contant = (
    <Link>
      <Lazyload  Style={"w-[10vw]"} src={p2} className="" alt="6" />
    </Link>
  );
  if (unLock) {
    contant = (
      <Link to="/GembaQustion">
        <Lazyload  Style={"w-[10vw]"} src={p2L} className="" alt="6" />
      </Link>
    );
  }
  return (
    <>
      <div className="relative  h-full w-full">
        <Lazyload src={mainbg} WH={100} Style={"opacity-0"} />
        <div className="absolute  top-[20%] right-[25%] ">
          <div className="relative gap-[10vw] flex justify-around  ">
            
              <Link to="/VideoGemba">
                <Lazyload
                  // WH={}
                  onClick={GEMBA_UNLOCK}
                  
                  Style={"w-[10vw] "}
                  src={p1}
                />
              </Link>

              {contant}
            </div>
            <div className="relative bottom-[6.5vw] -z-10  ">
              <Lazyload
                // WH={100}
                // style={{width:"100%"}}
                // style={{ width: "100%" }}
                Style={"w-[40vw]"}
                src={main}
                alt="1"
              />
            </div>
          </div>
      </div>
    </>
  );
};

export default Learn;
{
  /* <div className="relative h-full w-full ">
        <div className="inset-0">
          <Lazyload WH={100} className src={mainbg} alt="6" />



          <div className="absolute imgIN ">
            <div className="flex relative ">
              <Link to="/VideoGemba">
                <Lazyload
                  src={p1}
                  WH={50}
                  Style={""}
                  onClick={GEMBA_UNLOCK}
                  className=""
                  alt="6"
                />
              </Link>
              {contant}
              <div>
                <Lazyload WH={50} src={main} alt="6" />
              </div>
            </div>
          </div>{" "}
        </div>
      </div> */
}
