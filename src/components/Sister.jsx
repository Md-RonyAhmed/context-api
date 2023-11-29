/* eslint-disable react/prop-types */

import { useContext } from "react"
import { RingContext } from "../contexts/RingContext"


const Sister = () => {
  const {house}= useContext(RingContext)
  return (
    <div>
        <h2>Sister</h2>
        <h4>House:{house} </h4>
    </div>
  )
}

export default Sister