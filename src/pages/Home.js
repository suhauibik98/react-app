import React from "react";
import main from "../images/main.png";
import model from "../images/Module2.png";
import Lazyload from "../components/Lazyload";
import HomeRoute from "../components/HomeRoute";
const Home = () => {
  return (
    <>
      <div className="relative h-full w-full">
        {/* Background Image */}
        <div className="inset-0">
          <Lazyload
          WH={100}
            src={main}
            alt="Background"
          />

          {/* Model Image */}
          <div className="absolute top-[50%] left-1 w-[40%] sm:w-[45%]">
            <div className="relative">
              <Lazyload WH={100} src={model} alt="Model" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
