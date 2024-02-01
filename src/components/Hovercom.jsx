import React, { useState } from "react";
import gif from "../images/button/click-slowdown.gif";

const Hovercom = ({ top, left,width }) => {
    const [show , setShow ] = useState(true) 
  
    setTimeout(()=>{
        setShow(false)
    },3000);
   return (
<>
    { show && (
            <div>
            <img
              src={gif}
              style={{
                position: "absolute",
                width: `${width}%`,
                zIndex: "5",
                transform: "rotate(-20deg)",
                top: `${top}%`,
                left: `${left}%`,
              }}
              alt=""
            />
          </div>
    )


    }</>
  );
};

export default Hovercom;
