import React, {useContext} from "react";
import {GlobalInfo} from "./App";
import SuperChild from "./SuperChild";

function Child(){
    const {appColor} = useContext(GlobalInfo);
    
    return (
        <div>
          <h2 style={{color: appColor}}>Child Component</h2>
          <SuperChild/>
        </div>
      ); 
}

export default Child;