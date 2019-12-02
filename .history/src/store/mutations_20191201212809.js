import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

const mutations = {
  addCounter(state, payload) {
    payload.count += 1
  },
  addToCart(state, payload) {
    state.cartList.push(payload)
  }
}

export default mutations

