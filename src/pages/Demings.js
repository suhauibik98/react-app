import React from "react";
import { Link } from "react-router-dom";
import main from "../images/Dassitmain.png";
import d1 from "../images/D1.png";
import d2 from "../images/D2.png";
import d3 from "../images/D3.png";
import mainbg from "../../src/images/1.jpg";

import Lazyload from "../components/Lazyload";
const Demings = () => {
  return (
    <>
      <div className="relative h-full w-full ">
      <Lazyload src={mainbg} WH={100} Style={"opacity-0"} />

        <div className="absolute top-[20%] right-[20%]">
          <div className="relative flex gap-[7vw] left-[6%] top-0">

            <Link to="/deminges/Demings1">
              <Lazyload src={d1} Style={"changeImage1 w-[10vw]"} alt="Image1" />
            </Link>

            <Link className="secnd" to="/deminges/Demings2">
              <Lazyload  src={d2} Style={" w-[10vw] changeImage2"} alt="Image2" />
            </Link>
            <Link to="/deminges/Demings3">
              <Lazyload src={d3} Style={" w-[10vw] changeImage3"} alt="Image3" />
            </Link>
          </div>
          <div className="relative bottom-[16.1vw] -z-10">
            <Lazyload Style={"w-[50vw]"} src={main} alt="Main" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demings;
