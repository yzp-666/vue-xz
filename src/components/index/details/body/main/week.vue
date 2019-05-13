<template>
	<div>
		<div class="text" v-if="count.all">
			<h4><img src="ys.png" /> 综合运势</h4>
			<p> 
				{{count.all}}
			</p>
		</div>
		<div class="text" v-if="count.love">
			<h4><img src="love.png" /> 恋情</h4>
			<p>
				{{count.love}}
			</p>
		</div>
		<div class="text" v-if="count.money||count.finance">
			<h4><img src="health.png" /> 财运</h4>
			<p>
				{{count.money}}
			</p>
		</div>
		<div class="text" v-if="count.work">
			<h4><img src="qz.png" /> 工作</h4>
			<p>
				{{count.work}}
			</p>
		</div>
		<div class="text" v-if="count.health">
			<h4><img src="health.png" /> 健康</h4>
			<p>
				{{count.health}}
			</p>
		</div>
		<div class="text">
			<h4><img src="hg.png" /> 每日推荐</h4>
			<p>
				<img src="i.png" />
			</p>
		</div>
		<div class="foot">
			<div class="indexbutton">
				<img src="index.png" />
				<h6>首页</h6>
			</div>
			<div class="hotbutton">
				<img src="hottop.png" />
				<h6>头条</h6>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'week',
		props:['name','count'],
	}
</script>

<style lang="less" scoped>
	.xx {
		display: inline-block;
		font-size: 0.26rem;
		margin-top: 0.4rem;
		position: relative;
	}
	.maintop {
		display: flex;
		justify-content: space-around;
		padding-bottom: 0.32rem;
		border-bottom: 0.01rem solid #e5e5e5;
		margin-bottom: 0.42rem;
		text-align: left;
		.maintop-child{
			display: flex;
			flex-direction: column;
		}
		.QFriend{
			font-size: 0.22rem;
			color: #8f8d8e;
		}
	}
	.text{
		margin-bottom: 0.14rem;
		h4{
			font-size: 0.28rem;
			font-weight: 400;
			color: #4e4e4e;
			text-align: left;
			img{
				width: 0.58rem;
				vertical-align: middle;
				margin-right: 0.15rem;
			}
		}
		p{
			margin: 0.23rem 0 0.31rem 0;
			padding: 0 0.5rem;
			font-size: 0.22rem;
			text-align: left;
			color: #828281;
			img{
				width: 100%;
			}
		}
	}
	.foot{
		display: flex;
		justify-content: space-around;
		margin-bottom: 0.77rem;
		.indexbutton{
			width: 1.6rem;
			border-radius: 50%;
			img{
				width: 45%;
			}
			h6{
				font-size: 0.22rem;
				font-weight: 400;
				color: #b73ed6;
			}
		}
		.hotbutton{
			img{
				width: 80%;
			}
			h6{
				font-size: 0.22rem;
				font-weight: 400;
				color: #6c6c6c;
			}
		}
	}
</style>
