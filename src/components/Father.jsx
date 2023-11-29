/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Brother from "./Brother"
import MySelf from "./MySelf"
import Sister from "./Sister"

const Father = ({house}) => {
  const [gift,setGift] = useState("Special Gift")
  return (
    <div>
        <h2>Father</h2>
        <h4>House: {house} </h4>
        <div style={{display:"flex"}}>
            <Brother house={house}/>
            <MySelf gift={gift} house={house}/>
            <Sister house={house}/>
        </div>
    </div>
  )
}

export default Father