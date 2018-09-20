//import vue library
import Vue from 'vue'
//import app component
import App from './components/App.vue'
//import VueRouter
import VueRouter from 'vue-router'
//import firebaseApp Object
import { firebaseApp } from './firebaseApp'

//using VueRouter
Vue.use(VueRouter)

//import Store
import store from './store'

//import Dashboard.vue
import Dashboard from './components/Dashboard.vue'

//import Signin.vue
import Signin from './components/Signin.vue'

//import Signup.vue
import Signup from './components/Signup.vue'


//creating Vue router
const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/dashboard', component: Dashboard },
		{ path: '/signin', component: Signin },
		{ path: '/signup', component: Signup}
	]
})

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch('signIn', user)
		router.push('/dashboard')
	} else {
		router.replace('/signin')
	}
})


//vue instance
new Vue({
	el: '#app',
	router,
	store,
	//render method
	render: h => h(App)  //rending App.vue component
})