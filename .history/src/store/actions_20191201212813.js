const actions = {
  addCart({state, commit}, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    if (oldProduct) {
      commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      commit('addToCart', payload)
    }
  }
}

export default actions

