import axios from 'axios'
import { SET_DATA,AJAX_GET_DATA } from './types.js'
export default {
	state: {
		items:[]
	},
	mutations: {
		[SET_DATA](state,payload) {
			state.items = payload
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
	      axios.get('/static/reserve.json')
	          .then((response) => {
	          	context.commit(SET_DATA,response.data.data.items)
	          })
	    },
	},
	getter: {

	}

}