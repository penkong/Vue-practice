import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};
//can make actions more complicate to make other 3 simple
//actions are place for complexity
const actions = {
  //it come from where commit from
  // rootState allow us to reach other modules and access states that are inside them
  fetchImages: async ({ rootState, commit }) => { 
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
    //always cl response
    // commit(response);
  },

  uploadImage: () => {}
};

const mutations = {
  //first always state sec or third define by us 
  setImages: (state, images) => {
    state.images = images;
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};