<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.link"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>

</style>