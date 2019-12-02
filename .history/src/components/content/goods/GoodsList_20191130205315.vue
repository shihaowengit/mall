<template>
  <div class="goods">

  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

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
    GoodListItem
  }
}
</script>

<style>

</style>