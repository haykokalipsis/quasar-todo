const state = {
	settings: {
		show12HourTimeFormat: false
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
	}
};

const actions = {
	setShow12HourTimeFormat(context, value) {
		context.commit('SET_SHOW_12_HOUR_TIME_FORMAT', value)
	}
};

export default {
	namespaced: true,
	getters,
	mutations,
	actions,
	state
}
