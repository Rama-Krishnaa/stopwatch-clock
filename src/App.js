import { useState } from 'react';
import './App.css';
import Stopwatch from "./Stopwatch";
import Clock from "./Clock";

function App() {
  const [toggle, setToggle] = useState(false);
  const [btnText, setBtnText] = useState(false);
  let handleClick = () => {
    setToggle(!toggle);
    setBtnText(!btnText);
  }
  return (
    <div className="App">
      <button className="btn-toggle" onClick={handleClick}>
        Switch to { btnText ? "Clock" : "Stopwatch"}
      </button>
      {toggle ? <Stopwatch /> : <Clock />}
    </div>
  );
}

export default App;
