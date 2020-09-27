import { LocalStorage, Loading } from 'quasar';
import { firebaseAuth } from "boot/firebase";
import { showErrorMessage} from "src/functions/function-show-error-message";

const state = {
	loggedIn: false
};

const getters = {

};

const mutations = {
	SET_LOGGED_IN (state, value) {
		state.loggedIn = value
	}
};

const actions = {
	register({}, payload) {
		Loading.show();

		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log('response: ', response);
			})
			.catch(error => {
				showErrorMessage(error.message);
			});
	},

	login({}, payload) {
		Loading.show();

		firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log('response: ', response);
			})
			.catch(error => {
				showErrorMessage(error.message);
			});
	},

	logout(payload) {
		firebaseAuth.signOut()
			.then(response => {
				console.log('response: ', response);
			})
			.catch(error => {
				console.log('error.message: ', error.message);
			});
	},

	handleAuthStateChange(context) {
		firebaseAuth.onAuthStateChanged(  (user) => {
			Loading.hide();

			if (user) {
				context.commit('SET_LOGGED_IN', true);
				LocalStorage.set('loggedIn', true);
				this.$router.push('/');
			} else {
				context.commit('SET_LOGGED_IN', false);
				LocalStorage.set('loggedIn', false);
				this.$router.replace('/auth');
			}
		})
	}
};

export default {
	namespaced: true,
	getters,
	mutations,
	actions,
	state
}
