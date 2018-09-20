<template>
 <div class="row justify-content-md-center">
	<div class="col-md-5">
	  <h2 class="h3 mb-3 font-weight-normal">Sign Up</h2>
	  <label for="InputEmail" class="sr-only">Email address </label>
	  <input type="email" id="InputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
	  <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
      <p class="sign-in-btn"><button class="btn btn-lg btn-primary btn-block" @click="signUp">Sign Up</button></p>
      <div class="error-message">
        <p>{{error.message}}</p>
      </div>
      <p><router-link to="/signin">Already A User? Sign in</router-link></p>
	</div>
 </div>	
</template>


<script>
import { firebaseApp } from '../firebaseApp'

export default {
	data() {
		return {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
	},
	
	methods: {
		signUp() {
			firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
		}
	}
}
</script>