import React, { useState } from "react";
import Stars from "./components/stars";
import Like from "./components/like"
import "./App.css";


function App() {
  return (
    <div className="card">
      <div className="box">
        <Stars/>
        <Like />

      </div>
    </div>
  );
}
export default App;
