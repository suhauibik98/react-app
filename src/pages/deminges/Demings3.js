import React from 'react'
import main from '../../images/Brainstorming/main.png'
import center from '../../images/Brainstorming/P73.gif'
//import "../../index.scss"
import HomeRoute from "../../components/HomeRoute";
const Demings3 = () => {
  return (
    <><HomeRoute></HomeRoute>
    <div className='flex items-center justify-center h-screen'>
    <div className="flex flex-col items-center justify-center">
      <img  src={main} alt='4'></img>
      <div className='centerBrain'>
        <img src={center}   alt='4'></img>
      </div>
      </div>
    </div></>
  )
}

export default Demings3
