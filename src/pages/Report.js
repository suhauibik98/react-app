import React, { useState } from "react";
import main from "../images/learnOut.png";
import cont1 from "../images/outComs/Asset1-1.png";
import cont0 from "../images/outComs/Asset1-0.png";
import cont2 from "../images/outComs/Asset2-1.png";
import cont20 from "../images/outComs/Asset2-0.png";
import cont3 from "../images/outComs/Asset3-1.png";
import cont30 from "../images/outComs/Asset3-0.png";
import cont4 from "../images/outComs/Asset4-1.png";
import cont40 from "../images/outComs/Asset4-0.png";
import HomeRoute from "../components/HomeRoute";
import Lazyload from "../components/Lazyload";
import Hovercom from "../components/Hovercom";

const Report = () => {
  const [clickedImages, setClickedImages] = useState([]);

  const handelmove = (id) => {
    setClickedImages((prevClickedImages) => {
      console.log(prevClickedImages);
      if (prevClickedImages.includes(id)) {
        return prevClickedImages.filter((clickedId) => clickedId !== id);
      } else {
        return [...prevClickedImages, id];
      }
    });
  };

  const isImageClicked = (id) => clickedImages.includes(id);

  return (
    <>
      <div className="relative h-full w-full">
        <Hovercom top={38} left={22} width={2.5}></Hovercom>
        <HomeRoute></HomeRoute>
        {/* Background Image */}
        <div className="inset-0">
          <Lazyload
            WH={100}
            src={main}
            alt="Background"
          />

          {/* Model Image */}

          <div className="absolute imgIN ">
            <div className="relative flex flex-col gap-[1vh]  ">
              <div
                id={1}
                className={`${"flex relative flex-row "}  ${
                  isImageClicked(1) ? "move-x" : ""
                }`}
              >
                <Lazyload
                  WH={100}
                  className="-z-10"
                  src={cont1}
                  alt="a"
                  Style="-z-10"
                ></Lazyload>
                <div className="absolute w-[15%] right-[1%] bottom-[10%]">
                  <Lazyload
                    onClick={() => handelmove(1)}
                    className="imgOf"
                    WH={100}
                    src={cont0}
                    alt="a"
                  />
                </div>
              </div>
              <div
                id={2}
                className={`${"flex flex-row relative "}  ${
                  isImageClicked(2) ? "move-x" : ""
                }`}
              >
                <Lazyload
                  WH={100}
                  className="-z-10"
                  src={cont2}
                  Style="-z-10"
                  alt="a"
                ></Lazyload>
                <div className="absolute w-[15%] right-[1%] bottom-[10%]">
                  <Lazyload
                    onClick={() => handelmove(2)}
                    className="imgOf"
                    WH={100}
                    src={cont20}
                    alt="a"
                  ></Lazyload>
                </div>
              </div>
              <div
                id={3}
                className={`${"flex flex-row relative "}  ${
                  isImageClicked(3) ? "move-x" : ""
                }`}
              >
                <Lazyload
                  WH={100}
                  className="-z-10"
                  src={cont3}
                  alt="a"
                  Style="-z-10"
                ></Lazyload>
                <div className="absolute w-[15%] right-[1%] bottom-[10%]">
                  <Lazyload
                    onClick={() => handelmove(3)}
                    className="imgOf"
                    WH={100}
                    src={cont30}
                    alt="a"
                  ></Lazyload>
                </div>
              </div>
              <div
                id={4}
                className={`${"flex flex-row relative "}  ${
                  isImageClicked(4) ? "move-x" : ""
                }`}
              >
                <Lazyload
                  WH={100}
                  className="-z-10"
                  src={cont4}
                  alt="a"
                  Style="-z-10"
                ></Lazyload>
                <div className="absolute w-[15%] right-[1%] bottom-[10%]">
                  <Lazyload
                    onClick={() => handelmove(4)}
                    className="imgOf"
                    WH={100}
                    Style={""}
                    src={cont40}
                    alt="a"
                  ></Lazyload>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
