import main from "../../images/gemba/Question68-69/q1/q1.png";
import A1 from "../../images/gemba/Question68-69/q1/Asset6-8.png";
import A2 from "../../images/gemba/Question68-69/q1/Asset4-8.png";
import A3 from "../../images/gemba/Question68-69/q1/Asset3-8.png";
import A4 from "../../images/gemba/Question68-69/q1/Asset11-8.png";
import check from "../../images/gemba/Question68-69/Asset1-8.png";
import check2 from "../../images/gemba/Question68-69/Asset2-8.png";
import bar from "../../images/gemba/Question68-69/Artboard76-8.png";
import barF from "../../images/gemba/Question68-69/Artboard762-8.png";
import barT from "../../images/gemba/Question68-69/Artboard76.png";
import { useState } from "react";
import HomeRoute from "../../components/HomeRoute";
import mainbg from "../../images/1.jpg";
import Lazyload from "../../components/Lazyload";

const Qustion = () => {
  const [clickIndex, setIndex] = useState(null);
  const [pop, setPop] = useState(false);
  const [popD, setPopD] = useState(true);
  const images = [A2, A4, A2, A4];
  const handelClick = (index) => {
    console.log(index);
    setIndex(index);
  };

  const handlePopupSubmit = () => {
    setPop(true);
    setPopD(false);
  };

  let barTrue = (
    <>
      <div className="hotSpot"></div>
      <div className="inset-0" style={{ zIndex: "100" }}>
        <Lazyload src={barT} WH={100} alt="4"></Lazyload>
      </div>
    </>
  );
  let barFalse = (
    <>
      <div className="hotSpot "></div>
      <div className="inset-0" style={{ zIndex: "100" }}>
        <Lazyload src={barF} WH={100} alt="4"></Lazyload>
        <button
          className="RloadBtn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
      </div>
    </>
  );
  return (
    <>
      <HomeRoute />
      <div className=" relative  w-full h-full ">
        <Lazyload Style={"absolute inset-0 "} src={main}></Lazyload>
        <Lazyload Style={"opacity-0 inset-0 h-[100%]"} WH={100} src={mainbg}></Lazyload>
        {/* <div
          className="bg-cover bg-center w-full h-full  "
          style={{ backgroundImage: `url(${main})` }}
        ></div> */}
        <div className="absolute top-[16vw] left-[8vw] cursor-pointer w-[40%]">
          {images.map((src, index) => (
            <div key={index} className="flex mb-[0.5vh] relative">
              <Lazyload
                Style={""}
                src={src}
                onClick={() => {
                  handelClick(index);
                }}
                alt="a"
              />
              {clickIndex === index && (
                <img src={check} className="checkerGreen" alt="4"></img>
              )}
              {clickIndex !== index && pop && (
                <img src={check2} className="checkerGreen" alt="25"></img>
              )}
            </div>
          ))}
        </div>
        <div className="relative bottom-[34%] left-[50%]" >
        <button className="submit-button" onClick={handlePopupSubmit}>
          Submit
        </button>
        </div>
        <div className="absolute  bottom-0">
        <div className="relative ">
          {popD && <Lazyload WH={100} src={bar} alt="a" />}
          {pop && <>{clickIndex === 1 ? barTrue : barFalse}</>}
        </div></div>
      </div>
    </>
  );
};

export default Qustion;
