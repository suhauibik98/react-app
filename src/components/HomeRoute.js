import React from "react";
import { Link, useLocation } from "react-router-dom";
import home from "../../src/images/button/buttonsHome.gif";
import info from "../../src/images/button/buttonInfo.gif";
import rep from "../../src/images/button/buttonRep.gif";
import Lazyload from "./Lazyload";
import { LazyLoadComponent } from "react-lazy-load-image-component";
const HomeRoute = () => {
  const reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="flex absolute right-[1%] top-[1%] w-[12%] z-10  ">
        <div className="relative flex">
          <Link>
            <Lazyload src={info} alt="4"></Lazyload>
          </Link>
          <Link onClick={reload}>
            <Lazyload src={rep} alt="4"></Lazyload>
          </Link>
          <Link to="/">
            <Lazyload src={home} alt="4"></Lazyload>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeRoute;
