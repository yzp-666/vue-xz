<template>
	<div>
		<vdetails></vdetails>
		<start v-show="false"></start>
	</div>
</template>

<script>
	import start from '../start.vue'
	import vdetails from './details/details.vue'
	
	export default {
		name:"index",
		components:{
			start,
			vdetails,
		}
	}
</script>

<style scoped>
</style>
