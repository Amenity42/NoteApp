import React from "react"
// import App from "./App";
// import { loadTaskFromLocalStorage } from "./Storage";

function ContentArea(_props: any) {

      function handleChange(event: any) {
        _props.updateTask(_props.task.id, event.target.value);
      }

      return (
            <div className="ContentArea">
                  <h2>{_props.task.name}</h2>
                  <br></br>
                  <p>{_props.task.content}</p>
      
                  <input value={_props.task.content} onChange={handleChange} type="text" id="editContent" placeholder="Edit Content"></input>
            </div>
      );   

      //update component and display content
      
}

export default ContentArea;