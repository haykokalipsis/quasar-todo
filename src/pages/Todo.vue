 <template>
	<q-page> <!-- pa is for paading all directions -->
		<div class="q-pa-md absolute full-width full-height column">
			<!-- Add Task, Lists, Search, Sort -->
			<template v-if="tasksDownloaded">
				<!-- Search and Sort-->
				<div class="row q-mb-lg">
					<Search />
					<Sort />
				</div>

				<p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
					No search results.
				</p>
				<!-- Search and Sort END -->

				<!-- Lists of tasks -->
				<q-scroll-area class="q-scroll-area-tasks">
					<NoTasks v-if="!Object.keys(tasksTodo).length && !search" class="q-mb-lg"/>

					<TaskList
						v-if="Object.keys(tasksTodo).length"
						:tasks="tasksTodo"
						bgColor="bg-orange-4">
							Todo
					</TaskList>

					<TaskList
						v-if="Object.keys(tasksCompleted).length"
						:tasks="tasksCompleted"
						class="q-mb-xl"
						bgColor="bg-green-4">
							Completed
					</TaskList>
				</q-scroll-area>
				<!-- Lists of tasks END -->

				<!-- Add Task Button -->
				<div class="absolute-bottom text-center q-mb-lg no-pointer-events">
					<q-btn
						@click="showAddTaskModal = true"
						round
						class="all-pointer-events"
						size="24px"
						color="primary"
						icon="add" />
				</div>
				<!-- Add Task Button END -->

			</template>
			<!-- Add Task, Lists, Search, Sort END -->

			<!-- Spinner -->
			<template v-else>
				<span class="absolute-center">
					<q-spinner color="primary" size="3em" />
				</span>
			</template>
			<!-- Spinner END -->
		</div>

		<!-- Add Task Modal Dialog -->
		<q-dialog v-model="showAddTaskModal">
			<AddTask @close-modal="showAddTaskModal = false" />
		</q-dialog>
		<!-- Add Task Modal Dialog END -->
	</q-page>
</template>

<script>
	import {mapGetters, mapState} from 'vuex';

	export default {
		data() {
			return {
				showAddTaskModal: false
			};
		},

		computed: {
			...mapGetters('tasks', [
				'tasksTodo',
				'tasksCompleted'
			]),

			...mapState('tasks', [
				'search',
				'tasksDownloaded'
			])
			// tasks() {
			// 	return this.$store.getters('tasks/tasks')
			// }
		},

		mounted() {
			this.$root.$on('show-add-task-modal', () => {
				this.showAddTaskModal = true;
			});
		},

		components: {
			TaskList: require('components/Tasks/TaskList').default,
			NoTasks: require('components/Tasks/NoTasks').default,
			Search: require('components/Tasks/Search').default,
			Sort: require('components/Tasks/Sort').default,
			AddTask: require('components/Tasks/Modals/AddTask').default
		}
	}
</script>

<style lang="scss">
.q-scroll-area-tasks {
	display: flex;
	flex-grow: 1;
	.mobile & {
		flex-basis: 100px;
	}
}

.electron {
	.q-scroll-area-tasks {
		.scroll {
			height: auto !important;
		}
	}
}
</style>
