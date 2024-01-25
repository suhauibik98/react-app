import React from 'react'
import Lazyload from '../../components/Lazyload'
import main from "../../images/Processmapping/team.png"
const Exercise = () => {
  return (
    <>
    <div>
      <Lazyload src={main} alt="5"/>
    </div></>
  )
}

export default Exercise
