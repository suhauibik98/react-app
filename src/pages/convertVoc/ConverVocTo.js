import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bg from "../../images/convertToVoc/Artboardbg.png";
import VOC from "../../images/convertToVoc/VOC.png";
import VOCp from "../../images/convertToVoc/VOCp.png";
import CTQ from "../../images/convertToVoc/CTQ.png";
import CTQp from "../../images/convertToVoc/CTQp.png";
import Popup from "../../components/Popup";
import Lazyload from "../../components/Lazyload";
import HomeRoute from "../../components/HomeRoute";
import next from "../../images/button/Next.gif";
import Hovercom from "../../components/Hovercom";
const ConverVocTo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
        <Hovercom top={30} left={60} width={4}></Hovercom>
        <Hovercom top={30} left={100} width={4}></Hovercom>

      <HomeRoute></HomeRoute>
      <div className="container">
        <div>
          <Lazyload src={Bg} alt="4" />
        </div>
        <div className="flex  justify-center items-center absolute ">
          <img src={VOC} alt="4" onClick={() => openPopup(VOCp)}></img>
          <img src={CTQ} alt="4" onClick={() => openPopup(CTQp)}></img>
        </div>
        <Link to="/Vdc">
          <img
            className="absolute bottom-2 w-44 right-2 cursor-pointer"
            src={next}
            alt="1"
          ></img>
        </Link>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        imageSrc={selectedImage}
      />
    </>
  );
};

export default ConverVocTo;
