import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Fish from "../Assets/Fish-1.svg";

function Section1() {
  const [data, setData] = useState();

  return (
    <>
      <Navbar />
      <header className="landing-content">
        <div className="content">
          <h1>Placeholderr</h1>
          <h2>
            The perfect JSON placeholder for your website
            <div className="fish-illustration">
              <img src={Fish} alt="Fish illustration" />
            </div>
          </h2>
        </div>
      </header>
    </>
  );
}

export default Section1;
