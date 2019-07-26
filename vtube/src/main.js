import Vue from 'vue';
import App from './App.vue';

// npm i -g @vue/cli
// vue create (name of proj)
new Vue({
  // el: '#app',
  // function(createElement) { return createElement(App);}
  render: h => h(App)
}).$mount('#app');
