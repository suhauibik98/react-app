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
import mainbg from "../../images/1.jpg";

const GambaBar = () => {
  const [gif, setGif] = useState(gif1);
  const changeGif = (gif) => {
    setGif(gif);
  };
  return (
    <>
      <Hovercom top={22} left={80} width={3}></Hovercom>

      <HomeRoute></HomeRoute>
      <div className="relative h-full w-full">
      <Lazyload Style={"absolute"} src={main}></Lazyload>
      <Lazyload Style={"opacity-0"} WH={100} src={mainbg}></Lazyload>
      <div className="absolute top-[2%] right-[1.5vw] w-[40vw] h-full">
        <div className="relative top-[6%] left-[14vw]">
          <Lazyload
            src={c1}
            WH={55}
            Style={"circle1"}
            onClick={() => changeGif(gif1)}
            alt="aa"
          />
        </div>
       <div className="relative flex gap-[10vw] z-20 top-[27%] left-[1.5vw] ">
        <Lazyload  src={c2} onClick={() => changeGif(gif2)} WH={80}  Style={"circle2"}/>
        <Lazyload  src={c3} onClick={() => changeGif(gif3)} WH={80} Style={"circle3"}/>
       </div>



        <div className="relative bottom-[22%] left-[7vw]">
          <Lazyload
            src={gif}
            WH={80}
            Style={" block m-0"}
            // className="absolute"
            alt="a"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default GambaBar;

// {/* <div className="absolute left-[1%] bottom-[21%] w-[90%]">
// <div className=" relative top-1 left-1 flex items-center">
//   {/* ct1 */}
//   <Lazyload
//     src={c2}
//     WH={100}
//     style={{ marginRight: "20px" }} 
//      Style={"mr-[10vw]"}
//     // className="circle circle2"
//     alt="ct1"
//     onClick={() => changeGif(gif2)}
//   />
//   {/* ct2 */}
//   <Lazyload
//     src={c3}
//     WH={100}
//     // className="circle circle3"
//     alt="ct2"
//     onClick={() => changeGif(gif3)}
//   />
// </div>
// </div> */}