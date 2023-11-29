/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RingContext = createContext(null);

export const RingProvider = ({children}) => {
    const [house, setHouse] = useState(2);
    const ornaments = "Gold Ring";
    return (
      <RingContext.Provider value={{ornaments,house,}}>
        <div className="App">
          <button onClick={() => setHouse(house + 1)}>Buy a new House</button>
         {children}
        </div>
      </RingContext.Provider>
    )
}

