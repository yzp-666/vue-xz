import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index.vue'
import Home from './components/home.vue'
Vue.use(Router)

export default new Router({
		routes:[
			{path:'/',component:Index},
			{path:'/xq',component:Home},
			{path:'*',component:Home},
		]
})
