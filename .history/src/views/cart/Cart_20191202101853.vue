<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>购物车({{cartLength}})</div></template>
    </nav-bar>
    <cart-list></cart-list>
    <bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 999;
  }
</style>