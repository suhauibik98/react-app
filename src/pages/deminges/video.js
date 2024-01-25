import React from 'react'
import videoa from "../../images/proplem/definingproblems.mp4"
const video = () => {
  return (
    <div>
    <video className="w-full h-screen" controls  >
    <source src={videoa} type="video/mp4" />
    </video>
  </div>
  )
}

export default video
