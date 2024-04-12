/* eslint-disable react/prop-types */

import { memo } from "react";




const Navbar = ({setAdjactive}) => {
  console.log("Navbar rerendered")
  return (
   <button onClick={()=>{setAdjactive()}}>{setAdjactive()}</button>
  );
};

export default memo(Navbar);
