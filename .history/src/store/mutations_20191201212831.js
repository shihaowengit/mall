import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

const mutations = {
  [ADD_COUNTER](state, payload) {
    payload.count += 1
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
}

export default mutations

