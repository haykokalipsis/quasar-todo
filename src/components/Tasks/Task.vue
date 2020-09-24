<template>
	<q-item
		v-ripple
		clickable
		@click="updateTask({id: id, updates: {completed: !task.completed}})"
		:class="task.completed && 'bg-green-1'">
		<!-- Checkbox -->
		<q-item-section side top>
			<q-checkbox class="no-pointer-events" :value="task.completed" />
		</q-item-section>
		<!-- Checkbox END -->

		<!-- Text -->
		<q-item-section>
			<q-item-label :class="{'text-strikethrough': task.completed}">{{ task.name }}</q-item-label>
		</q-item-section>
		<!-- Text END -->

		<!-- Calendar -->
		<q-item-section side v-if="task.dueDate">
			<div class="row">
				<div class="column justify-center">
					<q-icon name="event" size="18px" class="q-mr-xs"/>
				</div>

				<div class="column">
					<q-item-label caption class="row justify-end">{{ task.dueDate }}</q-item-label>
					<q-item-label caption class="row justify-end"><small>{{ task.dueTime }}</small></q-item-label>
				</div>
			</div>
		</q-item-section>
		<!-- Calendar END -->

		<!-- Delete button -->
		<q-item-section side>
			<q-btn
				flat
				round
				dense
				clickable
				@click.stop="onDelete(id)"
				color="red"
				icon="delete" />
		</q-item-section>
		<!-- Delete button -->
	</q-item>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: "Task",
		props: {
			task: {
				required: true,
				type: Object
			},

			id: {
				required: true,
				type: String
			}
		},

		methods: {
			...mapActions('tasks', [
				'updateTask',
				'deleteTask'
			]),

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
	}
</script>

<style scoped>

</style>
