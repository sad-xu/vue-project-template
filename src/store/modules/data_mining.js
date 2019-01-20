const data_mining = {
	state: {
		info: 'test data_mining'
	},
	mutations: {
		SET_INFO: (sate, info) => {
			state.info = info
		}
	},
	actions: {
		SetInfo({ commit, state }, info) {
			commit('SET_INFO', info)
		}
	}
}

export default data_mining
