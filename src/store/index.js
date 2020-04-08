import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cubeColor: 0xf687b3,
    shoeMeshColors: {},
    shoeMeshTextures: {},
  },
  getters: {
    cubeColor: (state) => state.cubeColor,
    shoeMeshColors: (state) => state.shoeMeshColors,
    shoeMeshTextures: (state) => state.shoeMeshTextures,
  },
  mutations: {
    SET_CUBE_COLOR: (state, color) => {
      state.cubeColor = color;
    },
    SET_SHOE_PROPERTY: (state, { propertyName, meshName, propertyValue }) => {
      Vue.set(state[propertyName], meshName, propertyValue);
    },
  },
  actions: {
    setCubeColor({ commit }, color) {
      commit('SET_CUBE_COLOR', color);
    },
    setShoeProperty({ commit }, { propertyName, meshName, propertyValue }) {
      try {
        commit('SET_SHOE_PROPERTY', { propertyName, meshName, propertyValue });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
