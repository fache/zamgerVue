import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  title: 'TEXT FROM STATE'
}
export default new Vuex.Store({
  state: state
})
