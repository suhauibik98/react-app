import React, { useState } from "react";
import { Link } from "react-router-dom";
import next from "../../images/button/Next.gif";
import main from "../../images/convertToVoc/P76/main.png";
import V1 from "../../images/convertToVoc/P76/Artboard1.png";
import V2 from "../../images/convertToVoc/P76/Artboard2.png";
import V3 from "../../images/convertToVoc/P76/Artboard3.png";
import V4 from "../../images/convertToVoc/P76/Artboard4.png";
import Popup from "../../components/Popup";
import Hovercom from "../../components/Hovercom";
const Vdc = () => {
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
        <Hovercom top={11} left={52} width={3}></Hovercom>
        <Hovercom top={45} left={70} width={3}></Hovercom>

      <div>
        <img src={main} alt="a" />
        <div className="vdcMain">
          <div className="vdcCard" onClick={() => openPopup(V1)}></div>
          <div className="vdcCard" onClick={() => openPopup(V2)}></div>
          <div className="vdcCard" onClick={() => openPopup(V3)}></div>
        </div>
        <div className="vdcCard1" onClick={() => openPopup(V4)}></div>
        <Link to="/Ctq">
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
      ></Popup>
    </>
  );
};

export default Vdc;
