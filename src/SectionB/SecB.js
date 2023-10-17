import React from "react";
import Overview from "./Overview";
import Customer from "./Customer";
import './SecB';
const SecB = ()=>{

    return(
        <div className="secB d-flex max-w d-js">
             <Overview/>
            <Customer/>
        </div>
    )
}
export default SecB;