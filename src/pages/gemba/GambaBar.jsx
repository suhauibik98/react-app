import React, { useState } from "react";
import main from "../../images/gemba/GembaP67/ArtboardMain.png";
import Lazyload from "../../components/Lazyload";
import gif1 from "../../images/gemba/GembaP67/Gif/1.gif";
import gif2 from "../../images/gemba/GembaP67/Gif/2.gif";
import gif3 from "../../images/gemba/GembaP67/Gif/3.gif";
import c1 from "../../images/gemba/GembaP67/Edit/Artboardc1.png";
import c2 from "../../images/gemba/GembaP67/Edit/Artboardc2.png";
import c3 from "../../images/gemba/GembaP67/Edit/Artboardc3.png";
import HomeRoute from "../../components/HomeRoute";
import Hovercom from "../../components/Hovercom";
const GambaBar = () => {
  const [gif, setGif] = useState(gif1);
  const changeGif = (gif) => {
    setGif(gif);
  };
  return (
    <>
        <Hovercom top={18} left={95} width={3}></Hovercom>

    <HomeRoute></HomeRoute>
      <div className="container relative">
        <Lazyload src={main}></Lazyload>
        <div className="flex justify-center items-center">
          <img
            src={c1}
            className="circle circle1 "
            onClick={() => changeGif(gif1)}
            alt="aa"
          />
          <img
            src={c2}
            className="circle circle2"
            alt="a"
            onClick={() => changeGif(gif2)}
          />
          <img
            src={c3}
            className="circle circle3"
            alt="a"
            onClick={() => changeGif(gif3)}
          />
        </div>
        <div>
          <img
            src={gif}
            style={{ width: "30%", right: "12rem", bottom: "12rem" }}
            className="absolute"
            alt="a"
          />
        </div>
      </div>
    </>
  );
};

export default GambaBar;
