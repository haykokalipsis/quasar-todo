<template>
	<q-page padding>

		<!-- Settings -->
		<q-list bordered padding class="q-mb-md">
			<q-item-label header>Settings</q-item-label>

			<q-item tag="label" v-ripple>
				<q-item-section>
					<q-item-label>Show 12 hour time format</q-item-label>
				</q-item-section>

				<q-item-section side>
					<q-toggle color="blue" v-model="show12HourTimeFormat"/>
				</q-item-section>
			</q-item>

			<q-item tag="label" v-ripple>
				<q-item-section>
					<q-item-label>Show tasks in one list</q-item-label>
				</q-item-section>

				<q-item-section side>
					<q-toggle color="blue" v-model="showTasksInOneList"/>
				</q-item-section>
			</q-item>
		</q-list>
		<!-- Settings END -->

		<!-- Help -->
		<q-list bordered padding>
			<q-item-label header>More</q-item-label>

			<q-item to="/settings/help" tag="label" v-ripple>
				<q-item-section>
					<q-item-label>Help</q-item-label>
				</q-item-section>

				<q-item-section side>
					<q-icon name="chevron_right" />
				</q-item-section>
			</q-item>

			<q-item @click="visitOurWebsite" tag="label" v-ripple>
				<q-item-section>
					<q-item-label>Visit our website</q-item-label>
				</q-item-section>

				<q-item-section side>
					<q-icon name="chevron_right" />
				</q-item-section>
			</q-item>

			<q-item @click="emailUs" tag="label" v-ripple>
				<q-item-section>
					<q-item-label>Email us</q-item-label>
				</q-item-section>

				<q-item-section side>
					<q-icon name="chevron_right" />
				</q-item-section>
			</q-item>
		</q-list>
		<!-- Help END -->

	</q-page>
</template>

<script>
	import {mapActions, mapGetters} from "vuex";
	import { openURL } from 'quasar';

	export default {
		computed: {
			...mapGetters('settings', [
				'settings'
			]),

			show12HourTimeFormat: {
				get () {
					return this.settings.show12HourTimeFormat;
				},

				set (value) {
					this.setShow12HourTimeFormat(value);
				}
			},

			showTasksInOneList: {
				get () {
					return this.settings.showTasksInOneList;
				},

				set (value) {
					this.setShowTasksInOneList(value);
				}
			}
		},

		methods: {
			...mapActions('settings', [
				'setShow12HourTimeFormat',
				'setShowTasksInOneList',
			]),

			visitOurWebsite() {
				openURL('http://www.google.com');
			},

			emailUs() {
				window.location.href = 'mailto:haykokalipsis@outlook.com?subject=Awesome Todo Feedback';
			}
		}
	}
</script>

<style>

</style>
