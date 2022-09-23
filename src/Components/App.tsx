import { useState } from 'react';
import Form from './Form';
import Task from './Task';
import '../CSS/App.css';
// @ts-ignore

function App() {
	const [tasks, setTasks] = useState([]);

	//This adds a task to the list
	function addTask(name: string) {
		const task: any = {
			name,
			done: false,
			id: crypto.randomUUID(),
		};
		// @ts-ignore
		setTasks([...tasks, task]);
	}

	//This removes a task from the list
	function removeTask(taskId: string) {
		const newTasks = tasks.filter((task: { id: string; }) => task.id !== taskId);
		setTasks(newTasks);
	}

	return (
		<div className="App">
			<h1> Task List </h1>
			<Form onSubmit={addTask} />

			{tasks.length ? (
				<section className='task-container'>
				<ul>
					{tasks.map((task) => (
						// @ts-ignore
						<Task key={task.id}>
						
							{task.name}
						</Task>
					))}
				</ul>
				</section>
			) : (
				<p> No tasks yet </p>
			)}
		</div>
	);
}

export default App;
