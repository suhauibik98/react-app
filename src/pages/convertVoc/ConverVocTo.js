import React, { useState } from "react";
import Bg from "../../images/convertToVoc/Artboardbg.png";
import VOC from "../../images/convertToVoc/VOC.png";
import VOCp from "../../images/convertToVoc/VOCp.png";
import CTQ from "../../images/convertToVoc/CTQ.png";
import CTQp from "../../images/convertToVoc/CTQp.png";
import Popup from "../../components/Popup";
import Lazyload from "../../components/Lazyload";
import HomeRoute from "../../components/HomeRoute";
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
    <><HomeRoute></HomeRoute>
      <div className="container">
        <div>
          <Lazyload src={Bg} alt="4" />
        </div>
        <div className="flex  justify-center items-center absolute ">
          <img src={VOC} alt="4" onClick={() => openPopup(VOCp)}></img>
          <img src={CTQ} alt="4" onClick={() => openPopup(CTQp)}></img>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} imageSrc={selectedImage} />

    </>
  );
};

export default ConverVocTo;
