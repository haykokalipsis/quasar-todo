// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file

import { LocalStorage } from "quasar";

export default ( { app, router, Vue } ) => {

	router.beforeEach( (to, from, next) => {
		let loggedIn = LocalStorage.getItem('loggedIn');
		if( !loggedIn && to.path !== '/auth') {
			next('/auth');
		} else {
			next();
		}
	});
}
