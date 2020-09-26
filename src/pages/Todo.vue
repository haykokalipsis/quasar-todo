 <template>
	<q-page class="q-pa-md"> <!-- pa is for paading all directions -->
		<!-- Search -->
		<div class="row q-mb-lg">
			<Search />
			<Sort />
		</div>

		<p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">
			No search results.
		</p>
		<!-- Search END -->

		<!-- Lists of tasks -->
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
			bgColor="bg-green-4">
				Completed
		</TaskList>
		<!-- Lists of tasks END -->

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
				'search'
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

<style>

</style>
