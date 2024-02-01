import React, { useState } from "react";
import main from "../../images/convertToVoc/P77/main.png";
import p1 from "../../images/convertToVoc/P77/Artboard1.png";
import p2 from "../../images/convertToVoc/P77/Artboard2.png";
import p3 from "../../images/convertToVoc/P77/Artboard3.png";
import pop0 from "../../images/convertToVoc/P77/Asset1p.png";
import pop1 from "../../images/convertToVoc/P77/Asset2p.png";
import pop2 from "../../images/convertToVoc/P77/Asset3p.png";
import Hovercom from "../../components/Hovercom";

const Ctq = () => {
  const [clickIndex, setIndex] = useState(null);
  const images = [p1, p2, p3];
  const popImages = [pop0, pop1, pop2];

  const handelClick = (index) => {
    setIndex(index);
  };
  return (
    <>
        <Hovercom top={35} left={42} width={3}></Hovercom>

      <div className="container">
        <img src={main} alt="" />
        <div className="w-full h-full absolute">
          <div className="flex justify-evenly items-center h-full">
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt=""
                  onClick={() => {
                    handelClick(index);
                  }}
                />
                {clickIndex === index && (
                  <img
                    className="absolute"
                    style={{ width: "19%" }}
                    src={popImages[clickIndex]}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" /> */
}
export default Ctq;
