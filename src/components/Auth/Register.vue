<template>
	<form @submit.prevent="submitForm">
		<div class="row q-mb-md">
			<q-banner class="bg-grey-3 col">
				<template v-slot:avatar>
					<q-icon name="account_circle" color="primary"></q-icon>
				</template>
				Register to access your Todos anywhere!
			</q-banner>
		</div>

		<div class="row q-mb-md">
			<q-input
				class="col"
				ref="email"
				v-model="form.email"
				:rules="[val => isValidEmailAddress(val) || 'Please enter a valid email address']"
				lazy-rules
				outlined
				label="Email"
				stack-label />
		</div>

		<div class="row q-mb-md">
			<q-input
				v-model="form.password"
				:rules="[val => val.length >= 6 || 'Please enter at least 6 characters']"
				lazy-rules
				ref="password"
				class="col"
				outlined
				label="Password"
				type="password"
				stack-label />
		</div>

		<!-- TODO Password confirmation here -->
		
		<div class="row q-mb-md">
			<q-space />
			<q-btn type="submit" color="primary" label="Register" />
		</div>
	</form>
</template>

<script>
	export default {
		name: "Register",

		data() {
			return {
				form: {
					email: '',
					password: ''
				}
			}
		},

		methods: {
			submitForm() {
				this.$refs.email.validate();
				this.$refs.password.validate();

				if ( !this.$refs.email.hasError && !this.$refs.password.hasError) {
					console.log('register user');
				}
			},

			isValidEmailAddress(email) {
				const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return regexp.test(String(email).toLowerCase());
			}
		}
	}
</script>

<style scoped>

</style>
