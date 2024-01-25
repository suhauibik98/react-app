import React, { useState } from "react";
import Lazyload from "../components/Lazyload";
import main from "../images/TEST91-101/Q1/ArtboardQ1.png";
import p1 from "../images/TEST91-101/Q1/Artboardp1.png";
import p2 from "../images/TEST91-101/Q1/Artboardp2.png";
import p3 from "../images/TEST91-101/Q1/Artboardp3.png";
import p4 from "../images/TEST91-101/Q1/Artboardp4.png";
import smallImage from "../images/TEST91-101/AssetCheck.png";

const Test = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = (index) => {
    console.log(clickedIndex);
    setClickedIndex(index === clickedIndex ? null : index);
  };

  const handlePopupSubmit = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const images = [p1, p2, p3, p4];

  var popWrong = (
    <>
      <p className="text-red-600">Wrong Answer </p>
      <div className="popup-buttons">
        <button onClick={handleClosePopup}>Close</button>
      </div>
    </>
  );
  var CorectAnswer = (
    <>
      <p  className="text-lime-600">Good job Corect Answer</p>
      <div className="popup-buttons">
        <button onClick={handleClosePopup}>Close</button>
      </div>
    </>
  );
  return (
    <div className="container flex flex-col relative">
      <div>
        <Lazyload src={main} alt="Main Image" />
      </div>

      <div className="flex h-60 absolute q1">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              className={`questions ${clickedIndex === index ? "clicked" : ""}`}
              src={src}
              onClick={() => handleImageClick(index)}
              alt="5"
            />
            {clickedIndex === index && (
              <img className="small-image" src={smallImage} alt="SmallImage" />
            )}
          </div>
        ))}
      </div>

      <button className="submit-button" onClick={handlePopupSubmit}>
        Submit
      </button>

      {showPopup && (
        <div className="popup-overlaya">
          <div className="popup-contenta">
            {clickedIndex === 1 ? CorectAnswer : popWrong}
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
