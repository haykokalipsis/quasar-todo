<template>
	<div class="row q-mb-sm">
		<q-input
			v-select-all
			v-delayed_autofocus="{delayForCordova: 500}"
			outlined
			:value="title"
			@input="$emit('update:title', $event)"
			label="Task title"
			class="col"
			ref="title"
			:rules="[val => !!val || 'Field is required']">
			<!-- Or just use clearable attribute-->
			<template v-slot:append>
				<q-icon
					v-if="title"
					name="close"
					@click="$emit('update:title', '')"
					class="cursor-pointer" />
			</template>
		</q-input>
	</div>
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all';
	import { delayed_autofocus } from 'src/directives/directive-autofocus';

	export default {
		name: "ModalTaskName",
		props: ['title'],

		// Global directives in src/directives folder
		// directives: {
		// 	selectAll: {
		// 		// inserted hook
		// 		inserted (el) {
		// 			let input = el.querySelector('q-field__native');
		// 			input.addEventListener('focus', () => {
		// 				if (input.value.length) {
		// 					input.select()
		// 				}
		// 			})
		// 		}
		// 	}
		// }

		directives: {
			selectAll,
			delayed_autofocus
		}
	}
</script>

<style scoped>

</style>
