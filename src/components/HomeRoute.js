import React from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../src/images/button/buttonsHome.gif";
import info from "../../src/images/button/buttonInfo.gif";
import rep from "../../src/images/button/buttonRep.gif";
import Lazyload from "./Lazyload";
import { LazyLoadComponent } from "react-lazy-load-image-component";
const HomeRoute = () => {
 
  const reload =()=>{
       window.location.reload();
  }
  return (
    <>
    <LazyLoadComponent>
      <div
        className="flex gap-2 z-40 m-9 flex-row-reverse absolute right-0 top-0 "
        style={{ width: "150px" }}
      >
        <Link to="/">
          <Lazyload  src={home} alt="4"></Lazyload>
        </Link>
        <Link onClick={reload}> 
          <Lazyload src={rep} alt="4"></Lazyload>
        </Link>
        <Link>
          <Lazyload src={info} alt="4"></Lazyload>
        </Link>
      </div>
      </LazyLoadComponent>
    </>
  );
};

export default HomeRoute;
