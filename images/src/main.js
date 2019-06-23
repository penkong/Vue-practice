import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './App.vue';
import AuthHandler from './components/AuthHandler.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  //cause use browserRouter than hashRouter because of api
  mode: 'history', 
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})


new Vue({
  // el: '#app',
  //createElement
  router,
  store,
  render: h => h(App)
}).$mount('#app');
