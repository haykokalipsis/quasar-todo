<template>
	<q-card>
		<ModalHeader>
			Add Task
		</ModalHeader>

		<q-form @submit.prevent="onSubmitForm" >
			<q-card-section>
<!--				<ModalTaskName -->
<!--					v-bind:title="form.title"-->
<!--					v-on:update:title="form.title = $event">-->
<!--				v-bind.sync is shorthand for this-->
				<ModalTaskName :title.sync="form.title" ref="modalTaskName"/>
				<ModalTaskDueDate :dueDate.sync="form.dueDate" @clear-due-inputs="clearDueDateAndDueTime"/>
				<ModalTaskDueTime :dueTime.sync="form.dueTime" v-if="form.dueDate" />
			</q-card-section>

			<ModalButtons />
		</q-form>
	</q-card>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		name: "AddTask",

		data() {
			return {
				form: {
					title: '',
					dueDate: '',
					dueTime: '',
					completed: false
				}
			}
		},

		methods: {
			...mapActions('tasks', [
				'addTask'
			]),

			onSubmitForm () {
				this.$refs.modalTaskName.$refs.title.validate();
				if ( ! this.$refs.modalTaskName.$refs.title.hasError) {
					this.submitTask();
				}
			},

			submitTask () {
				this.addTask(this.form);
				this.$emit('close-modal')
			},

			clearDueDateAndDueTime () {
				this.form.dueDate = this.form.dueTime = '';
			}
		},

		components: {
			ModalHeader: require('components/Tasks/Modals/Shared/ModalHeader').default,
			ModalTaskName: require('components/Tasks/Modals/Shared/ModalTaskName').default,
			ModalTaskDueDate: require('components/Tasks/Modals/Shared/ModalTaskDueDate').default,
			ModalTaskDueTime: require('components/Tasks/Modals/Shared/ModalTaskDueTime').default,
			ModalButtons: require('components/Tasks/Modals/Shared/ModalButtons').default
		}
	}
</script>

<style scoped>

</style>
