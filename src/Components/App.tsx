import { useState, useEffect, Fragment } from 'react';
import Form from './Form';
import Task from './Task';
import '../CSS/App.css';
import {updateLocalStorage} from './Storage';


function App(props) {
	
	let [tasks, setTasks] = useState(props.tasks);

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
		 //updateLocalStorage(tasks); //not updating as expected (last task is not saved)
	}

	//This removes a task from the list
	function removeTask(taskId: string) {
		debugger;
		const newTasks = tasks.filter((task: { id: string; }) => task.id !== taskId);
		setTasks(newTasks);
		console.log("NewTasks");
		console.table(newTasks);
		
		// updateLocalStorage();
    		console.log('Removed task: ' + taskId);
		console.table(tasks);
    
	}

	useEffect(() => {
		updateLocalStorage(tasks);
	}, [tasks]);

	return (
		<div className="App">
			<header className="App-header">
				<h1> Task List </h1>	
			</header>
			
			<Form onSubmit={addTask} />

			{tasks.length ? (
				<Fragment>
					<section className='task-container'>
						<section className='task-list'>
							<ul>
								{tasks.map((task) => (
									// @ts-ignore
									<Task key={task.id} id={task.id} removeTask={removeTask}>
										{task.name}
									</Task>
								))}
							</ul>
						</section>

						<section className='task-content'>
						<h2>Task Content</h2>
						</section>
					</section>
				</Fragment>
			) : (
				<p> It's empty in here, <br></br> why not add some tasks? </p>
			)}
		</div>
	);
}

export default App;
