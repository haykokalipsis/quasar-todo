<template>
    <q-select
		filled
		class="col q-ml-sm"

		emit-value
		map-options

		v-model="sortBy"
		:options="options"
		label="Sort by"
		stack-label />
</template>

<script>
	import {mapActions, mapState} from 'vuex';

	export default {

		name: "Sort",
		data() {
			return {
				options: [
					{
						label: 'Name',
						value: 'title'
					},
					{
						label: 'Date',
						value: 'dueDate'
					}
				],
			}
		},

		computed: {
			...mapState('tasks', [
				'sort'
			]),

			sortBy: {
				get() {
					return this.sort;
				},

				set(value) {
					this.setSort(value);
				}
			}
		},

		methods: {
			...mapActions('tasks', [
				'setSort'
			])
		}
	}
</script>

<style scoped>
	.q-select {
		flex: 0 0 112px
	}
</style>
