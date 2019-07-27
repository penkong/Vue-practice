import qs from 'qs';
import api from '../../api/imgur';
import { router } from '../../main';


const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  //show falsy value false and vice versa
  isLoggedIn: state => !!state.token
};
//can make actions more complicate to make other 3 simple
//setToken update token in state
const actions = {
  login: () => api.login(),
  // first param in any action pass is obj that has some helpers tight to it 
  // window.location.hash come from authHandler.vue
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#',''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },
  //to call mutations we use commit function
  //first param is object with some helpers allow us modify us module
  logout: ({ commit }) =>{ 
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  }
};

const mutations = {
  //second arg provide by action guys
  setToken: (state, token) => state.token = token
};


export default  {
  state,
  getters,
  actions,
  mutations
};