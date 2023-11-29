/* eslint-disable react/prop-types */

import { useContext } from "react"
import { RingContext } from "../contexts/RingContext";


const Special = ({gift}) => {
    const {ornaments,house}= useContext(RingContext);
  return (
    <div>
        <h2>Special</h2>
        <h4>House: {house}</h4>
        <p>{gift}</p>
        <p>{ornaments}</p>
    </div>
  )
}

export default Special