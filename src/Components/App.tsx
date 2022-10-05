import { useState, useEffect, Fragment } from 'react';
import Form from './Form';
import Task from './Task';
import '../CSS/App.css';
import {updateLocalStorage} from './Storage';
import ContentArea from './ContentArea';


function App(props) {
	
	//States
	let [tasks, setTasks] = useState(props.tasks);
	let [activeTask, setActiveTask] = useState(null);

	function findActiveTask(id) {
		let task = tasks.find((task) => task.id === id);
		setActiveTask(task);
	}

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
		const newTasks = tasks.filter((task: { id: string; }) => task.id !== taskId);
		setTasks(newTasks);
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
					< section className='task-container'>
						<section className='task-list'>
							<ul>
								{tasks.map((task) => (
									// @ts-ignore
									<Task key={task.id} id={task.id} removeTask={removeTask} setActiveTask2={findActiveTask}>
										{task.name}
									</Task>
								))}
							</ul>
						</section>

			                  {/* if state of task content is null show nothing else show state */}
						<section className='task-content'>
						{/* {activeTask && <ContentArea {...activeTask}></ContentArea>} */}
						{activeTask ? (
							<ContentArea {...activeTask}></ContentArea>
						) : (
							null
						)}
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
