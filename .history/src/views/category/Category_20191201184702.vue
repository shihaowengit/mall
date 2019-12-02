<template>
  <h2>分类</h2>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Category',
  data () {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'))
  }
}
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: #ff0000
  }
</style>