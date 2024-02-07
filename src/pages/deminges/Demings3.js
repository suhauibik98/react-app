import React from 'react'
import main from '../../images/Brainstorming/main.png'
import center from '../../images/Brainstorming/P73.gif'
//import "../../index.scss"
import HomeRoute from "../../components/HomeRoute";
import Lazyload from '../../components/Lazyload';
import mainbg from "../../images/1.jpg";

const Demings3 = () => {
  return (
    <>
    <div className='relative h-full w-full'>
    <HomeRoute></HomeRoute>
    {/* <Lazyload src={mainbg} WH={100}  Style={"opacity-0 "} /> */}
    <div className="absolute top-0">

      <Lazyload WH={100}  src={main} alt='4'></Lazyload>
      <div className='relative bottom-[10%] right-[10%]'>
        <Lazyload src={center}  WH={50} alt='4'></Lazyload>
      </div>
      </div>
    </div></>
  )
}

export default Demings3
