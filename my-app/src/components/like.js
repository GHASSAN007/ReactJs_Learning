import React from "react";
import "./like.css";
import { AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

function Like() {
  return (
    <IconContext.Provider
      value={{
        color: "red",
        size: "25",
      }}
    >
      <div className= "like">
        <AiFillHeart />
      </div>
    </IconContext.Provider>
  );
}

export default Like;
