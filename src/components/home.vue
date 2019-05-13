<template>
	<div class="main">
		<h1>选 择 星 座</h1>
		<div class="container">
			<div class="imgboxs" v-for="item in obj" :key='item.id'>
				<div @click=myclick(item.Name,item.EnglishName,item.Time)>
					<img :src=item.Img />
					<h5>{{item.Name}}</h5>
					<h6>{{item.EnglishName}}</h6>
					<h6>({{item.Time}})</h6>
				</div>
			</div>
		</div>
		<div class="foot">
			<img src="XX_03.png" />
		</div>
	</div>
</template>

<script>
	export default {
		name:"home",
		data(){
			return{
				obj:'',
			}
		},
		beforeCreate() {
			this.$axios.get('/static/home.json').then( (response)=> {
				this.obj = response.data.data
			})
		},
		methods:{
			myclick(x,y,z){
				this.$router.push({
					path:'/',
					query:{
						name:x,
						EnglishName:y,
						vTime:z
					},
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.main{
		background: url('/bg.png') no-repeat;
		background-size: 100% 100%;
		text-align: center;
		color: #fefefe;
		h1{
			font-size: 0.34rem;
			font-weight: 400;
			padding-top: 1.08rem;
			margin-bottom: 1.43rem;
		}
		.container{
			display: flex;
			flex-wrap:wrap;
			padding-left: 0.74rem;
			justify-content: center;
			.imgboxs{
				margin: 0.28rem 0.8rem 0 0;
				div{
					h5{
						font-size: 0.26rem;
						font-weight: 400;
						margin: 0.17rem auto 0.12rem;
					}
					h6{
						font-size: 0.22rem;
						font-weight: 400;
						margin-bottom: 0.09rem;
					}
					img{
						width: 1.2rem;
						height: 1.2rem;
					}
				}
			}
		}
		.foot{
			margin-top: 1.7rem;
			padding-bottom: 1.34rem;
			img{
				width: 1rem;
				height: 1rem;
			}
		}
	}
</style>
