// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store.js';
import Home from './Home.vue';
import Login from './components/Login.vue';

Vue.config.productionTip = false;

Vue.component('app-home', Home);
Vue.component('app-login', Login);

var vueModel = new Vue({
  el: '#app',
  router,
  components: { App },
  store: store,
  template: '<App/>',
  data: {
    tes:'test'
  }
})
