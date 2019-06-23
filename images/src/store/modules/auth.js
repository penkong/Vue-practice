const state = {
  token: null
};

const getters = {
  isLoggedIn: state => {
    //show falsy value false and vice versa
    !!state.token
  }
};
//can make actions more complicate to make other 3 simple
//setToken update token in state
const actions = {
  login: () => {},
  finalizeLogin: () => {},
  //to call mutations we use commit function
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

const mutations = {
  //second arg provide by action guys
  setToken: (state, token) => {
    state.token = token;
  }
};