import React, { useState } from "react";
import gif from "../images/button/click-slowdown.gif";

const Hovercom = ({ top, left, width }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false)
  }, 3000);
  return (
    <>
      {show && (
        <div
          className="absolute"
          style={{ top: `${top}%`, left: `${left}%`, width: `${width}%`, zIndex: "5",}}
        >
          <div className="relative">
            <img
              src={gif}
              style={{
                
                transform: "rotate(-20deg)",
              }}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hovercom;
