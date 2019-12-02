import{
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
import { resolve } from 'dns'
import { reject } from 'q'

const actions = {
  addCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        payload.checked = false
        commit(ADD_TO_CART, payload)
        resolve('商品添加成功')
      }
    })
  }
}

export default actions

