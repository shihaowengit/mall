<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>购物街</div></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Cart',
  components: {
    NavBar
  }
}
</script>

<style>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>