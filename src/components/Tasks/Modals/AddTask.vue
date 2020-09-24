<template>
	<q-card>
		<ModalHeader>
			Add Task
		</ModalHeader>
		<q-card-section class="row">
			<div class="text-h6">Add Task</div>
			<q-space />
			<q-btn flat round dense icon="close" v-close-popup />
		</q-card-section>

		<q-form @submit.prevent="onSubmitForm" >
			<q-card-section>
				<div class="row q-mb-sm">
					<q-input
						autofocus
						outlined
						v-model="form.name"
						label="Task name"
						class="col"
						ref="name"
						:rules="[val => !!val || 'Field is required']">
						<!-- Or just use clearable attribute-->
						<template v-slot:append>
							<q-icon
								v-if="form.name"
								name="close"
								@click="form.name = ''"
								class="cursor-pointer" />
						</template>
					</q-input>
				</div>

				<div class="row q-mb-sm">
					<q-input label="Due Date" outlined v-model="form.dueDate">
						<template v-slot:append>
							<q-icon name="event" class="cursor-pointer" >
								<q-popup-proxy>
									<q-date v-model="form.dueDate" />
								</q-popup-proxy>
							</q-icon>

							<q-icon
								v-if="form.dueDate"
								name="close"
								@click="clearDueDateAndDueTime"
								class="cursor-pointer" />
						</template>
					</q-input>
				</div>

				<div class="row q-mb-sm" v-if="form.dueDate">
					<q-input class="col" clearable label="Due Time" outlined v-model="form.dueTime">
						<template v-slot:append>
							<q-icon name="access_time" class="cursor-pointer" >
								<q-popup-proxy>
									<q-time v-model="form.dueTime" />
								</q-popup-proxy>
							</q-icon>
						</template>
					</q-input>
				</div>
			</q-card-section>

			<q-card-actions align="right">
				<q-btn
					label="Save"
					color="primary"
					type="submit" />
			</q-card-actions>
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
					name: '',
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
				this.$refs.name.validate();
				if ( ! this.$refs.name.hasError) {
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
			ModalHeader: require('components/Tasks/Modals/Shared/ModalHeader').default
		}
	}
</script>

<style scoped>

</style>
