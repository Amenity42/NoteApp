import React from "react";

function AddTask(props: any) {
      function handleSubmit(event: any) {
      event.preventDefault();
      const trimmedName = event.target.taskName.value.trim();
      const trimmedContent = event.target.taskContent.value.trim();
      //Check if name is empty
      if (trimmedName) {
            props.onSubmit(trimmedName, trimmedContent);
      }
      // setName("");
      }
      
      return (
      <form className="formCreateNewTask2" onSubmit={handleSubmit}>
            <label htmlFor="task-name"> Task Name: </label>
            <br />
            <input
            id="task-name"
            type="text"
            name="taskName"
            required
            />
            <br />
            <label htmlFor="task-content"> Task Content: </label>
            <br />
            <textarea
            id="task-content"
            name="taskContent"
            rows={10}
            cols={50}
            placeholder="Add content here"
            ></textarea>
            <br />
            <button id="submitBtn"> Add Task </button>
      </form>
      );
      }

export default AddTask;