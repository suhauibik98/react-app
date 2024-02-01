import React from "react";
import main from "../images/main.png";
import model from "../images/Module2.png";
import Lazyload from "../components/Lazyload";
import HomeRoute from "../components/HomeRoute";
const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Lazyload
            src={main}
            className="w-full h-full object-cover"
            alt="Background"
          />

          {/* Model Image */}
          <div className="absolute top-[50%] left-0 w-full sm:w-[45%]">
            <div className="relative">
              <Lazyload src={model} alt="Model" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
