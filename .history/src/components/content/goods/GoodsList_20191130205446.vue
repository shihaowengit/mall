<template>
  <div class="goods">
    <goods-list-item v-for="item in goodsItem" :key="item.link">
      
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
    goodsItem: {
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