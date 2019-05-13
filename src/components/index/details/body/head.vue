<template>
	<div>
		<div class="headtop">
			<router-link to='/xq'>
				<div class="qh">
					<img src="qh.png" />
				</div>
			</router-link>
			<h1>星座伴侣</h1>
			<img src="logo.png" class="logo" />
		</div>
		<img src="today.png" />
	</div>
</template>

<script>
	export default {
		name: 'vhead',
	}
</script>

<style lang="less" scoped>
	.headtop {
		width: 100%;
		text-align: center;
		position: absolute;
		top: 1.04rem;

		h1 {
			font-size: 0.34rem;
			font-weight: 400;
			color: white;
		}

		.qh {
			width: 0.5rem;
			height: 0.5rem;
			font-size: 0;
			margin-left: 0.43rem;
			position: absolute;
		}
	}

	img {
		width: 100%;
		height: 100%;
	}

	.logo {
		width: 1.8rem;
		margin-top: 0.46rem;
		margin-bottom: 0.26rem;
	}
</style>
