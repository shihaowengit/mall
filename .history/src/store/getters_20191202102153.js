const getters = {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  cartCount(state) {
    return state.cartList.length
  },
  totalPrice() {
    const cartList = this.$store.getters.cartList;
    return cartList.filter(item => {
      return item.checked
    }).reduce((preValue, item) => {
      return preValue + item.count * item.newPrice
    }, 0).toFixed(2)
  }
}

export default getters