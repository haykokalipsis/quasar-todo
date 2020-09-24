<template>
	<q-page class="q-pa-md"> <!-- pa is for paading all directions -->
		<!-- List of tasks -->
		<q-list v-if="Object.keys(tasks).length" bordered separator>
			<Task
				v-for="(task, key) in tasks" :key="key"
				:task="task"
				:id="key">
			</Task>
		</q-list>
		<!-- List of tasks END -->

		<!-- Add Task Button -->
		<div class="absolute-bottom text-center q-mb-lg">
			<q-btn
				@click="showAddTaskModal = true"
				round
				size="24px"
				color="primary"
				icon="add" />
		</div>
		<!-- Add Task Button END -->

		<!-- Add Task Modal Dialog -->
		<q-dialog v-model="showAddTaskModal">
			<AddTask @close-modal="showAddTaskModal = false" />
		</q-dialog>
		<!-- Add Task Modal Dialog END -->
	</q-page>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		data() {
			return {
				showAddTaskModal: true
			};
		},

		computed: {
			...mapGetters('tasks', [
				'tasks'
			]),

			// tasks() {
			// 	return this.$store.getters('tasks/tasks')
			// }
		},

		components: {
			Task: require('components/Tasks/Task').default,
			AddTask: require('components/Tasks/Modals/AddTask').default
		}
	}
</script>

<style>

</style>
