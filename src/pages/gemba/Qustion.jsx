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

const Qustion = () => {
  const [clickIndex, setIndex] = useState(null);
  const [pop, setPop] = useState(false);
  const [popD, setPopD] = useState(true);
  const images = [A1, A2, A3, A4];
  const handelClick = (index) => {
    console.log(index);
    setIndex(index);
  };

  const handlePopupSubmit = () => {
    setPop(true);
    setPopD(false);
  };

  let barTrue = (
    <div className="absolute" style={{ bottom: "-5em", zIndex: "100" }}>
      <img src={barT} alt="4"></img>
    </div>
  );
  let barFalse = (
    <div className="fixed bg-red-600 ">
    <div className="absolute" style={{ bottom: "-5em", zIndex: "100" }}>
      <img src={barF} alt="4"></img>
    </div></div>
  );
  return (
    <>
      <HomeRoute />
      <div className="container flex flex-col relative ">
        <div
          className="bg-cover bg-center w-full h-full  "
          style={{ backgroundImage: `url(${main})` }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
            position: "absolute",
            gap: "2em",
            left: "200px",
            cursor: "pointer",
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img
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
        <button
          className="submit-button"
          style={{ zIndex: 101, bottom: "5em" }}
          onClick={handlePopupSubmit}
        >
          Submit
        </button>
        <div className="relative " style={{ width: "100%" }}>
          {popD && (
            <img
              src={bar}
              className="absolute"
              style={{ bottom: "-5em", zIndex: "100" }}
              alt="a"
            />
          )}
          {pop && <>{clickIndex === 1 ? barTrue : barFalse}</>}
        </div>
      </div>{" "}
    </>
  );
};

export default Qustion;
