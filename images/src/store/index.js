import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

//as middleware
Vue.use(Vuex);
//create store all state getters ...
export default new Vuex.Store({
  modules: {
    auth
  }
})