import React from "react";
import main from "../../src/images/convertToVoc/Asset.png";
import Asset1 from "../../src/images/convertToVoc/Artboard1.png";
import Asset2 from "../../src/images/convertToVoc/Artboard2.png";
import Lockimg from "../../src/images/convertToVoc/lock.png";
import { Link } from "react-router-dom";
import { useLock } from "../context/lockState";
import Lazyload from "../components/Lazyload";
const ThreeAs = () => {
  const {isLock , handleLockChange} = useLock();

  let contant = <Link to="/Questions"><img src={Asset2} className="ChangeBGVOC2" alt="6" /></Link>
  if(!isLock){
    contant = <Link><img src={Lockimg} className="" alt="6" /></Link>
  }
  return (
    <>
      <div className="container flex h-full justify-center items-center relative">
        <div className="flex gap-80 justify-center items-center">
          <Link to="/ConverVocTo">
            <img src={Asset1} onClick={handleLockChange} className="ChangeBGVOC1" alt="6" />
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

export default ThreeAs;
