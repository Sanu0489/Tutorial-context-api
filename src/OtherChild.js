import React, {useContext} from "react";
import {GlobalInfo} from "./App";

function OtherChild(){
    const {appColor} = useContext(GlobalInfo);

    return (
        <div>
          <h3 style={{color: appColor}}>OtherChild Component</h3>
        </div>
      ); 
}

export default OtherChild;