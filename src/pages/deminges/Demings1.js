import React from "react";
import main from "../../images/proplem/main.png";
import arrow from "../../images/proplem/arrow.gif";
import button from "../../images/proplem/BUTTON.gif";
import { Link } from "react-router-dom";
import HomeRoute from "../../components/HomeRoute";
const Demings1 = () => {
  return (
    <><HomeRoute></HomeRoute>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <img src={main} alt="4"></img>
          <div className="absolute bottom-[36%] w-60">
            <img src={arrow}  alt="4"></img>
          </div>
          <div className="Dvideo">
            <Link to="/deminges/video">
              <img src={button} alt="4"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demings1;
