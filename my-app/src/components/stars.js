import React from "react";
import "./stars.css";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

function Stars() {
  return (
    <IconContext.Provider value={{ 
      color:"red",
      size:"20"
      
      }}>

      <div className="stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </IconContext.Provider>
  );
}

export default Stars;
