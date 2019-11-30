<template>
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {}

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>