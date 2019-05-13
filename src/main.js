import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 调整font-size大小
refresh();
window.onresize = function() {
	setTimeout(function() {
		refresh();
	}, 10)
};

function refresh() {
	let deviceWidth = document.documentElement.clientWidth;
	if (deviceWidth > 1200) {
		document.documentElement.style.fontSize = 1200 / 12 + "px";
	} else {
		document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
	}
}
