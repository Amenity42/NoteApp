import React from 'react';
import '../CSS/App.css';
import setContentArea from './ContentArea';

//Create a new task
function Task(_props: any) {
  return (
      // @ts-ignore
    <li className="Task" onClick={ ()=>{setContentArea(_props)}}>
      <header>
            <input id={_props.id} className="individualTask" type="checkbox"/>
            <label htmlFor={_props.id}>{_props.children}</label>
      </header>
      <button id="deleteBtn" onClick={ ()=>{_props.removeTask(_props.id)} }> </button>
      <button id="editBtn"> </button>
      <button id="resizeBtn"> </button>
    </li>
  );
}



export default Task;
