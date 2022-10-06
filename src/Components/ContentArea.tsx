import React from "react"
import App from "./App";

function ContentArea(_props: any) {
      return (
            <div className="ContentArea">
                  <h2>{_props.name}</h2>
                  <br></br>
                  <p>{_props.content}</p>
                  <input onChange={(event)=>{console.log(event)}} type="text" id="editContent" placeholder="Edit Content"></input>
            </div>
      );   
            

      
      //update component and display content
      
}

export default ContentArea;