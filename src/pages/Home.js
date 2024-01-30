import React from "react";
import main from "../images/main.png";
import model from "../images/Module2.png";
import Lazyload from "../components/Lazyload";
import HomeRoute from "../components/HomeRoute";
const Home = () => {
  return (
    <>
      <div className="h-full ">
        <div className="h-full" >
          <Lazyload src={main} className=" w-full h-full object-cover absolute top-0 right-0" alt="l" />
        </div>

        <div className="absolute bottom-20 w-[45rem]">
          <Lazyload src={model} alt="io" />
        </div>
      </div>
    </>
  );
};

export default Home;
