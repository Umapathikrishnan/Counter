import React,{useState} from "react";
import "./style.css";

function App() {
  const [counter,setcounter]=useState(0);
  function  count(){
    setcounter(counter+1);
  }
  function  clear(){
   setcounter(counter-1);
  }
  return (
    <div className="app">
    <h1>Counter</h1>
    <h1>{counter}</h1>
<button onClick={count}>+</button>
<button onClick={clear}>-</button>

    </div>
  );
}
export default App;