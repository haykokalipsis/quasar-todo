<template>
	<transition
		appear
		enter-active-class="animated zoomIn"
		leave-active-class="animated zoomOut absolute-top">
		<div class="q-mb-lg">
			<q-banner
				dense
				inline-actions
				:class="['list-header', 'text-white', 'text-center', bgColor]">
					<span class="text-bold text-subtitle1">
						<slot></slot>
					</span>
			</q-banner>

			<q-list bordered separator>
				<Task
					v-for="(task, key) in tasks" :key="key"
					:task="task"
					:id="key">
				</Task>
			</q-list>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "TasksTodo",
		props: ['tasks', 'bgColor'],

		components: {
			Task: require('components/Tasks/Task').default,
		}
	}
</script>

<style>
	.list-header {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
</style>
