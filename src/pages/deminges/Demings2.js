import React from 'react'
import Lazyload from '../../components/Lazyload'
import boat from "../../images/boat.png"
import HomeRoute from "../../components/HomeRoute";
const Demings2 = () => {
  return (
    <><HomeRoute></HomeRoute>
    <div>
      <Lazyload src={boat} alt='a'/>
    </div></>
  )
}

export default Demings2
