/* eslint-disable react/prop-types */
import Special from "./Special"


const MySelf = ({gift,house}) => {
  return (
    <div>
        <h2>MySelf</h2>
        <h4>House:{house} </h4>
        <Special gift={gift} house={house}/>
    </div>
  )
}

export default MySelf