<template>
	<!-- swiper -->
	<swiper :options="swiperOption">
		<swiper-slide><day v-if="today" :name='name' :count="today"></day> </swiper-slide>
		<swiper-slide><day v-if="tomorrow" :name='name' :count="tomorrow"></day> </swiper-slide>
		<swiper-slide><week v-if="week" :name='name' :count="week"></week></swiper-slide>
		<swiper-slide><week v-if="nextweek" :name='name' :count="nextweek"></week></swiper-slide>
		<swiper-slide><week v-if="mount" :name='name' :count="mount"></week></swiper-slide>
		<swiper-slide><year v-if="year" :name='name' :count="year"></year></swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import day from "./day.vue"
	import week from "./week.vue"
	import year from "./year.vue"
	export default {
		name:"lunbo",
		props:["name"],
		components:{
			day,
			week,
			year
		},
		computed:{
			today(){
				return this.$store.state.today
			},
			tomorrow(){
				return this.$store.state.tomorrow
			},
			week(){
				return this.$store.state.week
			},
			nextweek(){
				return this.$store.state.nextweek
			},
			mount(){
				return this.$store.state.mount
			},
			year(){
				return this.$store.state.year
			}
		},
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet: function(index, className ,text) {
							switch (index) {
								case 0:
									text = '今日';
									break;
								case 1:
									text = '明日';
									break;
								case 2:
									text = '本周';
									break;
								case 3:
									text = '下周';
									break;
								case 4:
									text = '本月';
									break;
								case 5:
									text = '本年';
									break;
							}
							return '<span class="' + className + '">' + text + '</span>';
						},
					}
				}
			}
		},
		created() {
			this.$store.dispatch('getToday',this.name)
			this.$store.dispatch('getTomorrow',this.name)
			this.$store.dispatch('getWeek',this.name)
			this.$store.dispatch('getNextweek',this.name)
			this.$store.dispatch('getMount',this.name)
			this.$store.dispatch('getYear',this.name)
		}
	}
</script>

<style scoped>
	.swiper-pagination-bullet-custom {
		width: 100px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		font-size: 12px;
		color: #000;
		opacity: 1;
		background: rgba(0, 0, 0, 0.2);
	}

	.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
		color: #fff;
		background: #007aff;
	}
</style>

<style>
    .swiper-wrapper {
        padding-top: .5rem !important;
    }

    .swiper-pagination {
        top: 0;
        bottom: unset !important;
    }

    .swiper-pagination-bullet {
        width: auto !important;
        font-size: .22rem;
        height: .5rem !important;
        line-height: .5rem;
        border-radius: 0 !important;
        background-color: transparent !important;
        margin: 0 !important;
        width: 16% !important;

    }

    .swiper-pagination-bullet-active {
        background: transparent !important;
        color: #b73ed6;
    }
</style>