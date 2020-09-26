export function tasksTodo (state, getters) {
	let tasks = {};
	let tasksFiltered = getters.tasksFiltered;

	Object.keys(tasksFiltered).forEach(function (key) {
		let task = tasksFiltered[key]
		if ( ! task.completed) {
			tasks[key] = task;
		}
	})

	return tasks;
}

export function tasksCompleted (state, getters) {
	let tasks = {};
	let tasksFiltered = getters.tasksFiltered;

	Object.keys(tasksFiltered).forEach(function (key) {
		let task = tasksFiltered[key]
		if (task.completed) {
			tasks[key] = task;
		}
	})

	return tasks;
}

export function tasksFiltered (state, getters) {
	let tasksSorted = getters.tasksSorted;
	let filteredTasks = {};

	if (state.search) {
		Object.keys(tasksSorted).forEach(function (key) {
			let task = tasksSorted[key],
			taskTitleLowerCase = task.title.toLowerCase(),
			searchLowerCase = state.search.toLowerCase()

			if (taskTitleLowerCase.includes(searchLowerCase)) {
				filteredTasks[key] = task;
			}
		})

		return filteredTasks;
	}

	return tasksSorted;
}

export function tasksSorted(state) {
	let tasksSorted = {};
	let keysOrdered = Object.keys(state.tasks);

	keysOrdered.sort( (a, b) => {
		let taskAProp = state.tasks[a][state.sort].toLowerCase();
		let taskBProp = state.tasks[b][state.sort].toLowerCase();

		if (taskAProp > taskBProp) return 1;
		else if (taskAProp < taskBProp) return -1;
		else return 0;
	});

	keysOrdered.forEach( (key) => {
		tasksSorted[key] = state.tasks[key];
	});

	return tasksSorted;
}
