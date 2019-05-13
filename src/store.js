import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		today: '',
		tomorrow: '',
		week: '',
		nextweek: '',
		mount: '',
		year: '',
	},
	mutations: {
		today(state, val) {
			state.today = val;
		},
		tomorrow(state, val) {
			state.tomorrow = val;
		},
		week(state, val) {
			state.week = val;
		},
		nextweek(state, val) {
			state.nextweek = val;
		},
		mount(state, val) {
			state.mount = val;
		},
		year(state, val) {
			state.year = val;
		},
	},
	actions: {
		getToday(x,y) {
			this._vm.$axios.get('/api/constellation/getAll?consName=' + y + '&type=today&key=0db4a6757ed64712b97d60238e8c6bf1')
				.then((response) => {
					this.commit('today', response.data)
					// console.log(response.data)
					// console.log("今天")
				})
		},
		getTomorrow(x,y) {
			this._vm.$axios.get('/api/constellation/getAll?consName=' + y + '&type=tomorrow&key=0db4a6757ed64712b97d60238e8c6bf1')
				.then((response) => {
					this.commit('tomorrow', response.data)
					// console.log(response.data)
					// console.log("明天")
				})
		},
		getWeek(x, y) {
			this._vm.$axios.get('/api/constellation/getAll?consName=' + y + '&type=nextweek&key=0db4a6757ed64712b97d60238e8c6bf1')
				.then((response) => {
					this.commit('nextweek', response.data)
					// console.log(response.data)
					// console.log("本周")
				})
		},
		getNextweek(x, y) {
			this._vm.$axios.get('/api/constellation/getAll?consName=' + y + '&type=week&key=0db4a6757ed64712b97d60238e8c6bf1')
				.then((response) => {
					this.commit('week', response.data)
					// console.log(response.data)
					// console.log("下周")
				})
		},
		getMount(x, y) {
			this._vm.$axios.get('/api/constellation/getAll?consName=' + y + '&type=month&key=0db4a6757ed64712b97d60238e8c6bf1')
				.then((response) => {
					this.commit('mount', response.data)
					// console.log(response.data)
					// console.log("本月")
				})
		},
		getYear(x,y) {
			this._vm.$axios.get('/api/constellation/getAll?consName=' + y + '&type=year&key=0db4a6757ed64712b97d60238e8c6bf1')
				.then((response) => {
					this.commit('year', response.data)
					// console.log(response.data)
					// console.log("今年")
				})
		},
	}
})
