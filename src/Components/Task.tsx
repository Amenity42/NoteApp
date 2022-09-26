import React from 'react';
import '../CSS/App.css';

//Create a new task
function Task(_props: any) {
  return (
      // @ts-ignore
    <li className="Task">
      <header>
            <input id={_props.id} type="checkbox" />
            <label htmlFor={_props.id}>{_props.children}</label>
      </header>
      <button id="deleteBtn" onClick={ ()=>{_props.removeTask(_props.id)} }> </button>
    </li>
  );
}

export default Task;
