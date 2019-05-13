<template>
	<div>
		<vhead></vhead>
		<vmain></vmain>
	</div>
</template>

<script>
	import vhead from './body/head.vue'
	import vmain from './body/main/main.vue'
	export default{
		name:'vdetails',
		components:{
			vhead,
			vmain,
		}
	}
</script>

<style scoped>
</style>
