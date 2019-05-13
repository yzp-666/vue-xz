<template>
	<div>
		<ul>
			<li v-for="item in itemClass" :class="item"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'xx',
		props: ["num"],
		data() {
			return {
				r: 5,
			}
		},
		computed: {
			itemClass() {
				let arr = []
				//计算星星个数(整数和半个)
				let i = parseInt(this.num)/10/2
				let on = Math.floor(i)
				let half = (i - on) * 10
				while (arr.length < on) {
					arr.push('on')
				}
				if (half > 4) arr.push('half')
				while (arr.length < this.r) {
					arr.push('off')
				}
				return arr;
			}
		}
	}
</script>

<style scoped>
	div {
		display: inline-block;
	}

	li {
		width: 0.3rem;
		height: 0.3rem;
		background: url("../../../../../../public/xx2.png") no-repeat center/cover;
		float: left;
	}

	ul .on {
		background-image: url("../../../../../../public/xx.png");
	}

	ul .half {
		background-image: url("../../../../../../public/xx3.png");
	}

	ul .off {
		background-image: url("../../../../../../public/xx2.png");
	}
</style>
