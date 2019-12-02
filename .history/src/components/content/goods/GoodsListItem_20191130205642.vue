<template>
  <div class="goods-item">
    <img src="" alt="">
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>