import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      let oldproduct = state.cartList.find((item) => item.iid === payload.iid)

      if (oldproduct) {
        oldproduct.count += 1
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
