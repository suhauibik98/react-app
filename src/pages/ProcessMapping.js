import React from "react";
import { Link } from "react-router-dom";
import main from "../../src/images/Processmapping/AssetMain.png";
import m1 from "../../src/images/Processmapping/Artboard1.png";
import m2 from "../../src/images/Processmapping/Artboard2.png";
import m3 from "../../src/images/Processmapping/Artboard3.png";
import m4 from "../../src/images/Processmapping/Artboard4.png";
import m5 from "../../src/images/Processmapping/Artboard5.png";
import m5hi from "../../src/images/Processmapping/Artboard5hi.png";
import Lazyload from "../components/Lazyload";
import { useLock } from "../context/lockState";

import { LazyLoadComponent } from "react-lazy-load-image-component";
// import {useAppContext} from '../context/appContext'
const ProcessMapping = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const {state,dispatch} = useAppContext();
  const { isQ, handelclick_A, handelclick_B, handelclick_C, handelclick_D } =
    useLock();

  let contant = <Lazyload src={m5} alt="Image3" />;

  if (isQ) {
    contant = (
      <Link to="/QuestionMap" className="ChangeBGPM5">
        <Lazyload src={m5hi} alt="Image3" />
      </Link>
    );
  }
  return (
    <>
      <LazyLoadComponent>
        <div className="container flex items-center h-full">
          <div className="flex justify-center items-center">
            <div className=" flex absolute  ">
              <div className="flex gap-[130px] nthChild">
                <Link to="/Devmap" className="pp-1" onClick={handelclick_A}>
                  <Lazyload src={m1} className="" alt="Image1" />
                </Link>
                <Link to="/MapRules" className="pp-2" onClick={handelclick_B}>
                  <Lazyload src={m2} className="" alt="Image2" />
                </Link>

                <Link to="/ProcessMap" className="pp-3" onClick={handelclick_C}>
                  <Lazyload src={m3} className="" alt="Image3" />
                </Link>

                <Link to="/Exercise" className="pp-4" onClick={handelclick_D}>
                  <Lazyload src={m4} className="" alt="Image3" />
                </Link>
                {contant}
              </div>
            </div>
            <div className="relative -z-10 top-[200px]">
              <Lazyload src={main} alt="4" />
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    </>
  );
};

export default ProcessMapping;
