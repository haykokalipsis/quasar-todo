<template>
	<q-page padding>
		<q-card class="auth-tabs">
			<q-tabs
				v-model="tab"
				dense
				class="text-grey"
				active-color="primary"
				indicator-color="primary"
				align="justify" narrow-indicator>

				<q-tab name="login" label="Login" />
				<q-tab name="register" label="Register" />
			</q-tabs>

			<q-separator />

			<q-tab-panels v-model="tab" animated>
				<q-tab-panel name="login">
					<Login />
				</q-tab-panel>

				<q-tab-panel name="register">
					<Register />
				</q-tab-panel>
			</q-tab-panels>
		</q-card>
	</q-page>
</template>

<script>
	export default {
		name: "Auth",

		data() {
			return {
				tab: 'login'
			}
		},

		components: {
			'Register': require('components/Auth/Register').default,
			'Login': require('components/Auth/Login').default,
		}
	}
</script>

<style scoped>
	.auth-tabs {
		max-width: 500px;
		margin: 0 auto;
	}
</style>
