import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header>
    <div className="navbar">
      <h1><a href="#">Logo</a></h1>
      <nav>
d       <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </nav>
      <a className="cta" href="#"><button>Contact Us</button></a>
    </div>
  </header> 
  );
}

export default Navbar;
