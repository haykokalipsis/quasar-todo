<template>
	<q-item
		v-ripple
		clickable
		v-touch-hold:1000.mouse="showEditTask"
		@click="updateTask({id: id, updates: {completed: !task.completed}})"
		:class="task.completed && 'bg-green-1'">
		<!-- Checkbox -->
		<q-item-section side top>
			<q-checkbox class="no-pointer-events" :value="task.completed" />
		</q-item-section>
		<!-- Checkbox END -->

		<!-- Text -->
		<q-item-section>
			<q-item-label :class="{'text-strikethrough': task.completed}">{{ task.title }}</q-item-label>
		</q-item-section>
		<!-- Text END -->

		<!-- Calendar -->
		<q-item-section side v-if="task.dueDate">
			<div class="row">
				<div class="column justify-center">
					<q-icon name="event" size="18px" class="q-mr-xs"/>
				</div>

				<div class="column">
					<q-item-label caption class="row justify-end">{{ task.dueDate | niceDate }}</q-item-label>
					<q-item-label caption class="row justify-end"><small>{{ task.dueTime }}</small></q-item-label>
				</div>
			</div>
		</q-item-section>
		<!-- Calendar END -->

		<!-- Delete button -->
		<q-item-section side>
			<div class="row">
				<q-btn
					flat
					round
					dense
					clickable
					@click.stop="showEditTaskModal = true"
					color="primary"
					icon="edit" />

				<q-btn
					flat
					round
					dense
					clickable
					@click.stop="onDelete(id)"
					color="red"
					icon="delete" />
			</div>
		</q-item-section>
		<!-- Delete button -->

		<!-- Edit Task Modal Dialog -->
		<q-dialog v-model="showEditTaskModal">
			<EditTask :id="id" :task="task" @close-modal="showEditTaskModal = false" />
		</q-dialog>
		<!-- Edit Task Modal Dialog END -->
	</q-item>
</template>

<script>
	import { mapActions } from 'vuex';
	import { date } from 'quasar';
	const { formatDate } = date;

	export default {
		name: "Task",
		props: ['task', 'id'],

		data() {
			return {
				showEditTaskModal: false
			}
		},

		methods: {
			...mapActions('tasks', [
				'updateTask',
				'deleteTask'
			]),

			showEditTask() {
				this.showEditTaskModal = true;
			},

			onDelete(id) {
				this.$q.dialog({
					title: 'Confirm',
					message: 'Delete this?',
					ok: {
						push: true
					},
					cancel: {
						color: 'negative'
					},
					persistent: true
				})
					.onOk(() => {
						this.deleteTask(id);
					});
			}
		},

		filters: {
			niceDate(value) {
				return date.formatDate(value, 'MMMM D ')
			}
		},

		components: {
			EditTask: require('components/Tasks/Modals/EditTask').default
		}
	}
</script>

<style scoped>

</style>
