import axios from 'axios'
import { DOM_DATA,AJAX_GET_DATA,ABR_DATA } from './types.js'
export default {
	state: {
		domestic:[],
		abroad:[]
	},
	mutations: {
		[DOM_DATA](state,payload) {
			state.domestic = payload
		},
		[ABR_DATA](state,payload) {
			state.abroad = payload
		}

	},
	actions: {
		[AJAX_GET_DATA](context) {
	      axios.get('/static/city.json')
	          .then((response) => {
	          	context.commit(DOM_DATA,response.data.data.domestic)
	          	context.commit(ABR_DATA,response.data.data.abroad)
	          })
	    }
	}

}