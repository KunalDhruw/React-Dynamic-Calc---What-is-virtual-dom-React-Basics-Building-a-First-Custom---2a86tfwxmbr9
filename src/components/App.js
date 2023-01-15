import React, { useState, useEffect } from "react";
import "../styles/App.css";
const handle = () => {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let c = parseInt(a) + parseInt(b);
  return (document.getElementById("result").innerHTML = c);
};

const App = () => {
  return (
    <div id="main">
      <input id="input1" onChange={handle} />
      +
      <input id="input2" onChange={handle} />
      <p id="result">0</p>
    </div>
  );
};

export default App;
