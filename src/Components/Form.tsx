import { SetStateAction, SyntheticEvent, useState } from "react";

function Form(props: any) {
  const [name, setName] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (trimmedName) {
      props.onSubmit(trimmedName);
    }

    setName("");
  }

  function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
    setName(event.target.value);
  }

  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="task-name"> Task Name: </label>
      <br />
      <input id="task-name" type="text" value={name} onChange={handleChange} required />
      <br />
      <button> Add Task </button>
</form>
  );
};

export default Form;


