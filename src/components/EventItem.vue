<template>
<div class="col-md-4">
 <div class="card event-box" style="width: 18rem;">
  <div class="card-header">
    <h5 class="card-title">{{event.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{event.description}}</h6>
  </div>
    <ul class="list-group list-group-flush">
	    <li class="list-group-item">Date: {{event.date}}</li>
	    <li class="list-group-item">Location: {{event.location}}</li>
	    <li class="list-group-item">Host: {{event.email}}</li>
	</ul>
 </div>	
</div>
</template>



<script>
export default {
	props: ['event']
}
</script>