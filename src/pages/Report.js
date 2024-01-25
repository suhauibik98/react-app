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
const Report = () => {
  const [clickedImages, setClickedImages] = useState([]);

  const handelmove = (id) => {
    setClickedImages((prevClickedImages) => {
      console.log(prevClickedImages)
      if (prevClickedImages.includes(id)) {
        return prevClickedImages.filter((clickedId) => clickedId !== id);
      } else {
        return [...prevClickedImages,id];
      }
    });
  };

  const isImageClicked = (id) => clickedImages.includes(id);

  return (
    <div>
       <HomeRoute></HomeRoute>
      <div className="flex flex-row relative w-full">
        <Lazyload src={main} className="" alt="1" />
        <div className="flex flex-col absolute imgIN ">
          <div
            id={1}
            className={`${"flex relative flex-row "}  ${
              isImageClicked(1) ? "move-x" : ""
            }`}
          >
            <img className="-z-10" src={cont1} alt="a"></img>
            <div className="absolute right-2 bottom-3">
              <img
                onClick={() => handelmove(1)}
                className="imgOf"
                src={cont0}
                alt="a"
              />
            </div>
          </div>
          <div
            id={2}
            className={`${" flex flex-row relative "}  ${
              isImageClicked(2) ? "move-x" : ""
            }`}
          >
            <img className="-z-10" src={cont2} alt="a"></img>
            <div className="absolute right-2 bottom-3">
              <img
                onClick={() => handelmove(2)}
                className="imgOf"
                src={cont20}
                alt="a"
              ></img>
            </div>
          </div>
          <div
            id={3}
            className={`${" flex flex-row relative "}  ${
              isImageClicked(3) ? "move-x" : ""
            }`}
          >
            <img className="-z-10" src={cont3} alt="a"></img>
            <div className="absolute right-2 bottom-3">
              <img
                onClick={() => handelmove(3)}
                className="imgOf"
                src={cont30}
                alt="a"
              ></img>
            </div>
          </div>
          <div
            id={4}
            className={`${" flex flex-row relative "}  ${
              isImageClicked(4) ? "move-x" : ""
            }`}
          >
            <img className="-z-10" src={cont4} alt="a"></img>
            <div className="absolute right-2 bottom-3">
              <img
                onClick={() => handelmove(4)}
                className="imgOf"
                src={cont40}
                alt="a"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
