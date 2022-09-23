import React from 'react';
import '../CSS/App.css';

function Task(_props: any) {
  return (
      // @ts-ignore
    <li className="Task">
      <header>
            <input id={_props.id} type="checkbox" />
            <label htmlFor={_props.id}>{_props.children}</label>
      </header>
    </li>
  );
}

export default Task;
