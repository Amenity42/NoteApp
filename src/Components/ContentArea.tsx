import React from "react"
// import App from "./App";
// import { loadTaskFromLocalStorage } from "./Storage";

function ContentArea(_props: any) {
      const obj = {
            name: _props.name,
            content: _props.content,
            done: _props.done,
            id: _props.id,
      }

      return (
            <div className="ContentArea">
                  <h2>{_props.name}</h2>
                  <br></br>
                  <p>{_props.content}</p>
      
                  <input onChange={(event)=>{_props.setActiveTask({...obj, content: event.target.value})}} type="text" id="editContent" placeholder="Edit Content"></input>
            </div>
      );   

      //update component and display content
      
}

export default ContentArea;