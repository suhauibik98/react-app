import React from 'react'
import close from '../../src/images/convertToVoc/close.png'

const Popup = ({ isOpen, onClose, imageSrc }) => {
    if(!isOpen)return null;
    return (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={onClose}>
              <img src={close} alt="4" />
            </button>
            <img src={imageSrc} alt="Popup" />
          </div>
        </div>
      );
}
 
export default Popup
