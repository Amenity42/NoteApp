import { useState, useEffect, Fragment } from 'react';
import Form from './Form';
import Task from './Task';
import '../CSS/App.css';
import {updateLocalStorage} from './Storage';
import ContentArea from './ContentArea';
import AddTask from './AddTask';


function App(props) {
	
	//States
	let [tasks, setTasks] = useState(props.tasks);
	let [activeId, setActiveId] = useState(null);

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

	function updateTask(taskId: string, content: string) {
		const newTasks = tasks.map((task: { id: string; content: string; }) => {
			if (task.id === taskId) {
				return {...task, content };
			}
			return task;
		});
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
				<AddTask></AddTask>
				
			</header>
			
			<Form onSubmit={addTask} />

			{tasks.length ? (
				<Fragment>
					< section className='task-container'>
						<section className='task-list'>
							<ul>
								{tasks.map((task) => (
									// @ts-ignore
									<Task key={task.id} id={task.id} removeTask={removeTask} setActiveId={setActiveId}>
										{task.name}
									</Task>
								))}
							</ul>
						</section>

			                  {/* if state of task content is null show nothing else show state */}
						<section className='task-content'>
						{/* {activeTask && <ContentArea {...activeTask}></ContentArea>} */}
						
						{activeId ? (
							<ContentArea task={tasks.find(task => task.id === activeId)} updateTask={updateTask}> </ContentArea>
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
