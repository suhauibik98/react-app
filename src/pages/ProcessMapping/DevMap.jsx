import React from 'react'
import { useLock } from '../../context/lockState'

const DevMap = () => {
  const {a} = useLock()
  console.log(a);
  return (
    <div>
      Dev map
    </div>
  )
}

export default DevMap
