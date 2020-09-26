import uid from "quasar/src/utils/uid";

export function updateTask (context, payload) {
	console.log('payload:', payload);
	context.commit('UPDATE_TASK', payload);
}

export function deleteTask(context, payload) {
	context.commit('DELETE_TASK', payload);
}

export function addTask(context, task) {
	let taskId = uid();
	let payload = {
		id: taskId,
		task
	}
	context.commit('ADD_TASK', payload);
}

export function setSearch(context, value) {
	context.commit('SET_SEARCH', value);
}
