import React, { useState } from "react";
import { Link } from "react-router-dom";
import Status from "./Status";
import "@fontsource/playfair-display";
import About from "./About";

function Navbar({ mode, setmode }) {
  const [hidden1, sethidden1] = useState("hidden");

  const handleClick = () => {
    setmode(mode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-blue-800 p-3">
        {/* Left: About Us */}
        <div className="text-gray-200 text-2xl font-semibold hover:text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}  onClick={() => sethidden1(hidden1 === "hidden" ? "visible" : "hidden" )} >
          {/* <Link to="/About">About Us</Link> */}
          <About visi={hidden1} />
        </div>

        {/* Center: DSA Tracker */}
        {/* <div className="text-gray-200 text-2xl italic font-bold  ">
          <Link to="/">DSA Tracker</Link>
        </div> */}
        <div className="text-gray-200 text-3xl italic font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
             <Link to="/">DSA Tracker</Link>
              </div>


        {/* Right: Hot Tip with Bulb Icon */}
        <div
          className="flex items-center text-gray-200 text-2xl font-semibold cursor-pointer hover:text-gray-300"style={{ fontFamily: "'Playfair Display', serif" }}
          onClick={() => sethidden1(hidden1 === "hidden" ? "visible" : "hidden" )}
        >
          <img className="w-8 h-8 mr-2" src="bulb.png" alt="Bulb" />
          <span>Hot Tip</span>
        </div>
      </div>

      {/* Status Component */}
      <Status visi={hidden1} />
    </div>
  );
}

export default Navbar;
