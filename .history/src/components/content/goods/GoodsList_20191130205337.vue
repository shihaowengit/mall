<template>
  <div class="goods">
    goo
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