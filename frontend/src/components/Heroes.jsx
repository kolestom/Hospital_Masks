import React from "react";
import "./Heroes.css";

const Heroes = () => {
  return (
    <div className="heroes-main">
      <h1 style={{ textAlign: "center", paddingBottom: "3rem" }}>
        Welcome to the Rebels company's website!<br/>
        May the Mask be with you! 
      </h1>
      <div className="members-container">
        <div className="person-container">
          <img src="../src/img/luke.jpg" alt="Luke" />
          <p>
            <strong>Luke Skywalker </strong> CEO
          </p>
          
        </div>
        <div className="person-container">
          <img src="../src/img/kati.png" alt="Kati" />
          <p>
            <strong>Kati </strong>Padavan fullstack developer
          </p>
        </div>
        <div className="person-container">
          <img src="../src/img/tamas.jpg" alt="Tamás" />
          <p>
            <strong>Tamás </strong>Padavan fullstack developer
          </p>
        </div>
        <div className="person-container">
          <img src="../src/img/bela.jpg" alt="Béla" />
          <p>
            <strong>Béla </strong>Padavan fullstack developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
