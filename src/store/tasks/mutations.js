import Vue from 'vue';

export function UPDATE_TASK (state, payload) {
	Object.assign(state.tasks[payload.id], payload.updates);
}

export function DELETE_TASK(state, id) {
	// delete state.tasks[id]; // Deletes, but not reactive
	Vue.delete(state.tasks, id);
}

export function ADD_TASK(state, payload) {
	Vue.set(state.tasks, payload.id, payload.task); // Reactive add.
}

export function SET_SEARCH(state, value) {
	state.search = value;
}

export function SET_SORT(state, value) {
	state.sort = value;
}

export function SET_TASKS_DOWNLOADED(state, value) {
	state.tasksDownloaded = value;
}
