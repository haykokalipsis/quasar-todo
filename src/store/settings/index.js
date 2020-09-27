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
	}
};

const actions = {
	setShow12HourTimeFormat(context, value) {
		context.commit('SET_SHOW_12_HOUR_TIME_FORMAT', value)
	},

	setShowTasksInOneList(context, value) {
		context.commit('SET_SHOW_TASKS_IN_ONE_LIST', value)
	}
};

export default {
	namespaced: true,
	getters,
	mutations,
	actions,
	state
}
