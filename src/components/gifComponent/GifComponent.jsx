import React from "react";
import "./GifComponent.css";

function GifComponent() {
  return (
    <div className="gifComponent">
      <img
        className="gifImage"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnZT6NxjTQYo08EJFMW7vUJAaCVz6eqD0xHLw3KGkVisjbIeuOPRd_2B5ENcJ9QuTzYDSB5imSWDS1f1zIzLia-KKQllLRhE3WfiPxUJzYAgqSz4yG8LT-R6kLJaUTSWX4DpsJXuJqMIiXBnc4k6kvs4j00_28EVNF0PCgA-SbpDJOh0huQfxgJS_R/s520/Nike_FC_Presents_the_Footballverse.gif"
      />
      <h1>'TIS THE SEASON</h1>
      <p>
        Give the gift of flight with iconic Jordan looks for the whole family.
      </p>
      <button className="newProductButton">Notify Me</button>
    </div>
  );
}

export default GifComponent;
