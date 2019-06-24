
const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};
//can make actions more complicate to make other 3 simple
//actions are place for complexity
const actions = {
  fetchImages: () => {},

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