//import module
import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

//using the vuex librabry
Vue.use(Vuex)


//create state object
const state = {
	user: {},
	events: []
}


//using store instance
export default new Vuex.Store({
	state,
	mutations,
	actions

})