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

export function tasksFiltered (state) {
	let filteredTasks = {};

	if (state.search) {
		Object.keys(state.tasks).forEach(function (key) {
			let task = state.tasks[key],
			taskTitleLowerCase = task.title.toLowerCase(),
			searchLowerCase = state.search.toLowerCase()

			if (taskTitleLowerCase.includes(searchLowerCase)) {
				filteredTasks[key] = task;
			}
		})

		return filteredTasks;
	}

	return state.tasks;
}
