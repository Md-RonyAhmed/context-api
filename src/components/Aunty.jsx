/* eslint-disable react/prop-types */

import { useContext } from "react";
import { RingContext } from "../contexts/RingContext";


const Aunty = ({house}) => {
  const {ornaments}= useContext(RingContext);
  return (
    <div>
        <h2>Aunty</h2>
        <h4>House:{house} </h4>
        <p>{ornaments}</p>
    </div>
  )
}

export default Aunty