import { useState, useEffect } from 'react';
import Form from './Form';
import Task from './Task';
import '../CSS/App.css';
import { log } from 'console';
// @ts-ignore


function App() {
	
	let [tasks, setTasks] = useState([]);

	//run once when the app starts - load tasks from local storage
	useEffect(() => {
		loadTaskFromLocalStorage();
	}, []);

	//This adds a task to the list
	function addTask(name: string) {
		const task: any = {
			name,
			done: false,
			id: crypto.randomUUID(),
		};
		// @ts-ignore
		setTasks([...tasks, task]);

		//Save tasks to local storage
		updateLocalStorage();
	}

	//This removes a task from the list
	function removeTask(taskId: string) {
		//debugger;
		const newTasks = tasks.filter((task: { id: string; }) => task.id !== taskId);
		setTasks(newTasks);
		console.log("NewTaks");
		console.table(newTasks);
		
		updateLocalStorage();
    		console.log('Removed task: ' + taskId);
    
	}

	function updateLocalStorage() {
		localStorage.setItem('tasks', JSON.stringify(tasks));
		console.log(tasks);
		
	}

	function loadTaskFromLocalStorage() {
		const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
		setTasks(savedTasks);
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
						<Task key={task.id} id={task.id} removeTask={removeTask}>
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
