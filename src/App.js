import React, {createContext, useRef, useState} from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";

export const GlobalInfo = createContext();

function App() {

const [color, setColor] = useState('green');
const [name, setName] = useState('');

let inputRef = useRef(null);
let testRef = useRef(null);

const getName = (item)=>{
  setName(item);
}

function handleInput(){
 inputRef.current.style.color = "red";
 inputRef.current.focus();
}

function hideShow(){
  testRef.current.style.display = "none";
}
  return (
    <GlobalInfo.Provider value={{appColor: color, getName: getName, setColor: setColor}}>
    <div>
      <h1>App Component</h1>
      <h2>{name}</h2>
      <Child/>
      <OtherChild/>
      <input type="text"  ref = {inputRef}/>
      <button onClick={handleInput}>Handle Input</button>
      <br/><br/>
      <input type="text"  ref = {testRef}/>
      <button onClick={hideShow}>Hide/Show</button>
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
