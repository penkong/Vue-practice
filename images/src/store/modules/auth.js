import qs from 'qs';
import api from '../../api/imgur';

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
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#',''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
  },
  //to call mutations we use commit function
  logout: ({ commit }) =>{ 
    commit('setToken', null)
  }
};

const mutations = {
  //second arg provide by action guys
  setToken: (state, token) => {
    state.token = token;
  }
};


export default  {
  state,
  getters,
  actions,
  mutations
};