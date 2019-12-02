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
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>