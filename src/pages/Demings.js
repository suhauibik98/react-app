import React from "react";
import { Link } from "react-router-dom";
import main from "../images/Dassitmain.png";
import d1 from "../images/D1.png";
import d2 from "../images/D2.png";
import d3 from "../images/D3.png";
const Demings = () => {
  return (
    <>

      <div className="container">
        <div className=" additional-images">
          <Link to="/deminges/Demings1">
            <img src={d1} className="changeImage1" alt="Image1" />
          </Link>

          <Link className="secnd" to="/deminges/Demings2">
            <img src={d2} className="changeImage2" alt="Image2" />
          </Link>
          <Link to="/deminges/Demings3">
            <img src={d3} className="changeImage3" alt="Image3" />
          </Link>
        </div>
        <div className="mainBorderIndeminges">
          <img src={main} alt="Main" />
        </div>
      </div>
    </>
  );
};

export default Demings;
