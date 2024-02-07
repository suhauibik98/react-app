import React from 'react'
import Lazyload from '../../components/Lazyload'
import boat from "../../images/boat.png"
import HomeRoute from "../../components/HomeRoute";
import mainbg from "../../images/1.jpg";

const Demings2 = () => {
  return (
      <>
    <div className='relative w-full h-full'>
      <HomeRoute></HomeRoute>
      <Lazyload src={mainbg} WH={100} Style={"opacity-0 "} />
<div className='absolute top-0 '>
      <Lazyload src={boat} WH={98} alt='a'/></div>
    </div></>
  )
}

export default Demings2
