import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let product = state.cartList.find((item) => item.iid === payload.iid)
    }
  },
  actions: {
  },
  modules: {
  }
})
