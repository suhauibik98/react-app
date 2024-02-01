import React, { useState } from "react";
import q2 from "../../images/convertToVoc/Question78/Artboardq2.png";
import check from "../../images/gemba/Question68-69/Asset1-8.png";
import check2 from "../../images/gemba/Question68-69/Asset2-8.png";
import bar from "../../images/gemba/Question68-69/Artboard76-8.png";
import barF from "../../images/gemba/Question68-69/Artboard762-8.png";
import barT from "../../images/gemba/Question68-69/Artboard76.png";
import A1 from "../../images/convertToVoc/Question78/Asset5.png";
import A2 from "../../images/convertToVoc/Question78/Asset6.png";
import A3 from "../../images/convertToVoc/Question78/Asset7.png";
import A4 from "../../images/convertToVoc/Question78/Asset8.png";
import { Link } from 'react-router-dom';

const QuestionsTow = () => {
  const [clickIndex, setIndex] = useState(null);
  const [pop, setPop] = useState(false);
  const [popD, setPopD] = useState(true);
  const q1Images = [A1, A2, A3, A4];

  const handelClick = (index) => {
    setIndex(index);
  };
  const handlePopupSubmit = () => {
    setPop(true);
    setPopD(false);
  };
  let barTrue = (
    <>
      <div className="hotSpot"></div>
      <div className="absolute" style={{ bottom: "-5.3em", zIndex: "100" }}>
        <img src={barT} alt="4"></img>
        <Link to="/ConvertVOCtoCTQ">
        <button className="RloadBtn">Finish</button></Link>
      </div>
    </>
  );
  let barFalse = (
    <>
      <div className="hotSpot"></div>
      <div className="absolute" style={{ bottom: "-5.3em", zIndex: "100" }}>
        <img src={barF} alt="4"></img>
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
      <div className="container flex flex-col relative">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${q2})` }}
        ></div>

        <div className="flex flex-col items-baseline absolute gap-8 left-36 cursor-pointer ">
          {q1Images.map((src, index) => (
            <div key={index} className="relative">
              <img src={src} alt="1" onClick={() => handelClick(index)} />
              {clickIndex === index && (
                <img src={check} className="checkerGreen" alt="5"></img>
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
              style={{ bottom: "-5.3em", zIndex: "100" }}
              alt="a"
            />
          )}
          {pop && <>{clickIndex === 1 ? barTrue : barFalse}</>}
        </div>
      </div>
    </>
  );
};

export default QuestionsTow;
