
export default {
	state: {
		city:"北京"
	},
	mutations: {
		setCity(state,payload) {
			state.city = payload;
			localStorage.city = payload
		}

	}

}