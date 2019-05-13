<template>
	<div>
		<div class="maintop" v-if="count.all">
			<div class="maintop-child">
				<div class="xx">综合指数：<xx :num="count.all"></xx></div>
				<div class="xx">爱情指数：<xx :num="count.love"></xx></div>
				<div class="xx">工作指数：<xx :num="count.work"></xx></div>
				<div class="xx">幸运颜色：{{count.color}}</div>
			</div>
			<div class="maintop-child">
				<div class="xx">健康指数：<xx :num="count.health"></xx></div>
				<div class="xx">财运指数：<xx :num="count.money"></xx></div>
				<div class="xx">速配星座：<span class="QFriend">{{count.QFriend}}</span></div>
				<div class="xx">幸运数字：{{count.number}}</div>
			</div>
		</div>
		<div class="text" v-if="count.summary">
			<h4><img src="xzys.png" /> 今日概述</h4>
			<p>
				{{count.summary}}
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
	import xx from './xx.vue'

	export default {
		name: 'day',
		props:['name',"count"],
		data(){
			return{
				num:"",
			}
		},
		components: {
			xx,
		},
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
