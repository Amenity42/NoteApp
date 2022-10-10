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
			content: '',
		};
		// @ts-ignore
		setTasks([...tasks, task]);

	}

	//This removes a task from the list
	function removeTask(taskId: string) {
		const newTasks = tasks.filter((task: { id: string; }) => task.id !== taskId);
		setTasks(newTasks);
	}

	useEffect(() => {
		// setTasks([...tasks, activeTask]);
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
							<ContentArea {...activeTask} setActiveTask={setActiveTask}>{ setTasks([activeTask, tasks]) }</ContentArea>
							//! {/* I need to take the active task and find it within the tasks array then update the values of it with the values from actiove task, once this is done i then need to update the tasks state */}
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
