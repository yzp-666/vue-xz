<template>
	<div class="main">
		<div>
			<h5>{{name}} （{{EnglishName}}）</h5>
			<h6>{{vTime}}</h6>
		</div>
		<lunbo :name="name"></lunbo>
	</div>
</template>

<script>
	import lunbo from './lunbo.vue'
	export default{
		name:'vmain',
		data(){
			return {
				name: '',
				EnglishName:'',
				vTime:''
			}
		},
		components:{
			lunbo,
		},
		created(){
			//if判断值是否为传递的路由参数，可用于设置默认路由值
			if (!this.$route.query.name) {
				this.name = '白羊座'
				this.EnglishName = 'Aries'
				this.vTime = '3.21-4.19'
			}else{
				this.name = this.$route.query.name;
				this.EnglishName = this.$route.query.EnglishName;
				this.vTime = this.$route.query.vTime;
			}
			
		},
	}
</script>

<style lang="less" scoped>
	*{
		text-align: center;
	}
	.main{
		padding: 0 0.42rem;
	}
	h5{
		color: #313030;
		font-size: 0.26rem;
		font-weight: 400;
	}
	h6{
		color: #6a6a6a;
		font-size: 0.22rem;
		font-weight: 400;
		margin: 0.11rem 0 0.42rem;
	}
	ul{
		list-style: none;
		display: flex;
		justify-content: space-around;
		margin-bottom: 0.94rem;
		li{
			color: #c6c5c3;
			font-size: 0.22rem;
		}
		li:hover{
			color: #b73ed6;
		}
	}
</style>
