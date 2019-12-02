const actions = {
  addCart({state, commit}, payload) {
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    if (oldProduct) {
      commit('addCounter', oldProduct)
    }
  }
}

export default actions

