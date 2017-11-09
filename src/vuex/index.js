import Vuex from 'vuex'
import Vue from 'vue'
import reserve from '../pages/reserve/module.js'
Vue.use(Vuex);

export default new Vuex.Store ({
	modules: {
		reserve:reserve
	}
})
