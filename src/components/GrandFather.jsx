/* eslint-disable react/prop-types */
import Aunty from "./Aunty"
import Father from "./Father"
import Uncle from "./Uncle"


const GrandFather = ({house}) => {
  return (
    <div>
        <h2>GrandFather</h2>
        <h4>House: {house} </h4>
        <div style={{display:"flex"}}>
            <Father house={house} />
            <Uncle house={house}/>
            <Aunty house={house}/>
        </div>
    </div>
  )
}

export default GrandFather