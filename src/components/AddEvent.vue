<template>
<div class="row justify-content-md-center">
  <div class="col-md-6">
	<h4>Add an Event
	<input type="checkbox" v-model="showForm">
	</h4>
	<form v-if="showForm">
		<div class="form-group">
			<label>Title</label>
			<input type="text" class="form-control" v-model="event.title">
		</div>
		<div class="form-group">
			<label>Description</label>
			<input type="text" class="form-control" v-model="event.description">
		</div>
		<div class="form-group">
			<label>Date</label>
			<input type="date" class="form-control" v-model="event.date">
		</div>
		<div class="form-group">
			<label>Location</label>
			<input type="text" class="form-control" v-model="event.location">
		</div>
		<p><button class="btn btn-lg btn-primary" @click="addEvent">Submit</button></p>
	</form>
  </div>	
</div>
</template>

<script>
import { eventsRef } from '../firebaseApp'
export default {
	data() {
		return {
			event: {
				title: '',
				description: '',
				date: '',
				location: '',
				email: '',
			},
			showForm: false
		}
	},

	methods: {
		addEvent() {
			this.event.email = this.$store.state.user.email;
			eventsRef.push(this.event)
		}
	}
}
</script>