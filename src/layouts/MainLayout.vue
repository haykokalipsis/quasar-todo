<template>
	<q-layout view="hHh lpR fFf"> <!-- change layout in layout builder -->
		<q-header elevated>
			<q-toolbar>
<!--				<q-btn-->
<!--					flat-->
<!--					dense-->
<!--					round-->
<!--					icon="menu"-->
<!--					aria-label="Menu"-->
<!--					@click="leftDrawerOpen = !leftDrawerOpen"-->
<!--				/>-->

				<q-toolbar-title class="absolute-center">
					Awesome Todo
				</q-toolbar-title>
			</q-toolbar>
		</q-header>

		<q-footer>
			<q-tabs>
				<q-route-tab to="/" icon="list" label="Todo" />
				<q-route-tab to="/settings" icon="settings" label="Settings" />
			</q-tabs>
		</q-footer>

		<q-drawer
			:width="250"
			:breakpoint="767"
			v-model="leftDrawerOpen"
			show-if-above
			bordered
			content-class="bg-primary">
			<q-list dark>
				<q-item-label header>Navigation</q-item-label>
				<NavItem
					v-for="nav in navs" :key="nav.title"
					v-bind="nav"
				/>
			</q-list>
		</q-drawer>

		<q-page-container>
			<router-view/>
		</q-page-container>
	</q-layout>
</template>

<script>
	import NavItem from 'components/NavItem.vue'

	const navsData = [
		{
			title: 'Todo',
			caption: 'quasar.dev',
			icon: 'list ',
			link: '/'
		},
		{
			title: 'Settings',
			caption: 'github.com/quasarframework',
			icon: 'settings',
			link: '/settings'
		},
		{
			title: 'Discord Chat Channel',
			caption: 'chat.quasar.dev',
			icon: 'chat',
			link: 'https://chat.quasar.dev'
		},
		{
			title: 'Forum',
			caption: 'forum.quasar.dev',
			icon: 'record_voice_over',
			link: 'https://forum.quasar.dev'
		},
		{
			title: 'Twitter',
			caption: '@quasarframework',
			icon: 'rss_feed',
			link: 'https://twitter.quasar.dev'
		},
		{
			title: 'Facebook',
			caption: '@QuasarFramework',
			icon: 'public',
			link: 'https://facebook.quasar.dev'
		},
		{
			title: 'Quasar Awesome',
			caption: 'Community Quasar projects',
			icon: 'favorite',
			link: 'https://awesome.quasar.dev'
		}
	];

	export default {
		name: 'MainLayout',
		components: {NavItem},
		data() {
			return {
				leftDrawerOpen: false,
				navs: navsData
			}
		}
	}
</script>

<style lang="scss">
	@media screen and (min-width: 768px) {
		.q-footer {
			display: none;
		}
	}

	.q-drawer {
		.q-router-link--exact-active {
			color: white !important;
		}
	}
</style>
