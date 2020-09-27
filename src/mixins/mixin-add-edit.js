export default {
	methods: {
		onSubmitForm () {
			this.$refs.modalTaskName.$refs.title.validate();
			if ( ! this.$refs.modalTaskName.$refs.title.hasError) {
				this.submitTask();
			}
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
