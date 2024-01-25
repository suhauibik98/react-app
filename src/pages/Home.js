import React from "react";
import main from "../images/main.png";
import model from "../images/Module2.png";
import Lazyload from "../components/Lazyload";
import HomeRoute from "../components/HomeRoute";
const Home = () => {
  return (
    <>
      <div className="container overflow-y-hidden">
        <div className="">
          <Lazyload src={main} alt="l" />
        </div>

        <div className="absolute bottom-40 left-32 w-2/5">
          <Lazyload src={model} alt="io" />
        </div>
      </div>
    </>
  );
};

export default Home;
