import React, {useContext} from "react";
import {GlobalInfo} from "./App";

function SuperChild(){
    const {appColor, getName, setColor} = useContext(GlobalInfo);
    const name = "Arpita";
    
    function updateColor(){
        setColor("red");
    }
       
    return (
        <div>
          <h3 style={{color: appColor}}>SuperChild Component</h3>
          <button onClick={updateColor} >Update color</button>
          <br/>
          <button onClick={()=>getName(name)}>Click Me!</button>
        </div>
      ); 
}

export default SuperChild;