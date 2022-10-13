import React from 'react';
// import App from "./App";
// import { loadTaskFromLocalStorage } from "./Storage";

function ContentArea(_props: any) {
	function handleChange(event: any) {
		_props.updateTask(_props.task.id, event.target.value);
		console.log(event.target.value);
	}

	return (
		<div className="contentArea">
			{/* <p>{_props.task.content}</p> */}
			<section id="content">
				<h2 id="taskName">{_props.task.name}</h2>
                        <div>10/02/2022</div>
				<br></br>
				{/* <input value={_props.task.content} onChange={handleChange} type="text" id="editContent" placeholder="Edit Content"></input> */}
				<textarea
					value={_props.task.content}
					onChange={handleChange}
					id="editContent"
					name="content"
					rows={10}
					cols={50}
					placeholder="Add content here"
				></textarea>
			</section>
		</div>
	);

	//update component and display content
}

export default ContentArea;
