import { LocalStorage }from 'quasar';

const state = {
	settings: {
		show12HourTimeFormat: false,
		showTasksInOneList: false
	}
};

const getters = {
	settings: (state) => {
		return state.settings;
	}
};

const mutations = {
	SET_SHOW_12_HOUR_TIME_FORMAT (state, value) {
		state.settings.show12HourTimeFormat = value;
	},

	SET_SHOW_TASKS_IN_ONE_LIST (state, value) {
		state.settings.showTasksInOneList = value;
	},

	SET_SETTINGS(state, settings) {
		Object.assign(state.settings, settings)
	}
};

const actions = {
	setShow12HourTimeFormat(context, value) {
		context.commit('SET_SHOW_12_HOUR_TIME_FORMAT', value);
		context.dispatch('saveSettings');
		// localStorage.setItem('show12HourTimeFormat', value);
	},

	setShowTasksInOneList(context, value) {
		context.commit('SET_SHOW_TASKS_IN_ONE_LIST', value);
		context.dispatch('saveSettings');
		// localStorage.setItem('showTasksInOneList', value);
	},

	saveSettings(context) {
		LocalStorage.set('settings', context.state.settings);
	},

	getSettings(context) {
		let settings = LocalStorage.getItem('settings');

		if (settings) {
			context.commit('SET_SETTINGS', settings );
		}
	}
};

export default {
	namespaced: true,
	getters,
	mutations,
	actions,
	state
}
