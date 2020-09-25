<template>
	<div class="row q-mb-sm">
		<q-input
			class="col"
			@input="$emit('update:dueTime', $event)"
			clearable
			label="Due Time"
			outlined
			:value="dueTime">
			<template v-slot:append>
				<q-icon
					name="access_time"
					class="cursor-pointer" >
					<q-popup-proxy>
						<q-time
							:value="dueTime"
							@input="$emit('update:dueTime', $event)"/>
					</q-popup-proxy>
				</q-icon>
			</template>
		</q-input>
	</div>
</template>

<script>
	export default {
		name: "ModalDueTime",
		props: ['dueTime']
	}
</script>

<style scoped>

</style>
