<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>购物车()</div></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  }
}
</script>

<style>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>