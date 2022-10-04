	const key = 'tasks';

	function loadTaskFromLocalStorage() {
		const savedTasks = JSON.parse(localStorage.getItem(key) || '[]');
		return savedTasks;
	}

      function updateLocalStorage(tasks) {
		localStorage.setItem(key, JSON.stringify(tasks));
	}


export {updateLocalStorage, loadTaskFromLocalStorage}; 