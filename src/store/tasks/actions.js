import uid from "quasar/src/utils/uid";
import { firebaseDb, firebaseAuth } from "boot/firebase";

export function updateTask (context, payload) {
	console.log('payload:', payload);
	// context.commit('UPDATE_TASK', payload);

	context.dispatch('firebaseUpdateTask', payload);
}

export function deleteTask(context, id) {
	// context.commit('DELETE_TASK', payload);

	context.dispatch('firebaseDeleteTask', id);
}

export function addTask(context, task) {
	let taskId = uid();
	let payload = {
		id: taskId,
		task
	}
	// context.commit('ADD_TASK', payload);

	context.dispatch('firebaseAddTask', payload);
}

export function setSearch(context, value) {
	context.commit('SET_SEARCH', value);
}

export function setSort(context, value) {
	context.commit('SET_SORT', value);
}

export function firebaseReadTasks(context) {
	let userId = firebaseAuth.currentUser.uid;
	let userTasks = firebaseDb.ref('tasks/' + userId);

	// Initial check for data
	userTasks.once('value', snapshot => {
		context.commit('SET_TASKS_DOWNLOADED', true);
	});

	// Child added hook
	userTasks.on('child_added', (snapshot) => {
		let task = snapshot.val();

		let payload = {
			id: snapshot.key,
			task: task
		};
		context.commit('tasks/ADD_TASK', payload, {root: true});
	});

	// Child changed hook
	userTasks.on('child_changed', (snapshot) => {
		let task = snapshot.val();

		let payload = {
			id: snapshot.key,
			updates: task
		};
		context.commit('UPDATE_TASK', payload);
	});

	// Child removed hook
	userTasks.on('child_removed', (snapshot) => {
		let taskId = snapshot.key;
		context.commit('DELETE_TASK', taskId);
	});
}

export function firebaseAddTask({}, payload) {
	let userId = firebaseAuth.currentUser.uid;
	let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id);

	taskRef.set(payload.task);
}

export function firebaseUpdateTask({}, payload) {
	let userId = firebaseAuth.currentUser.uid;
	let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id);

	taskRef.update(payload.updates);
}

export function firebaseDeleteTask({}, taskId) {
	let userId = firebaseAuth.currentUser.uid;
	let taskRef = firebaseDb.ref('tasks/' + userId + '/' + taskId);

	taskRef.remove();
}
