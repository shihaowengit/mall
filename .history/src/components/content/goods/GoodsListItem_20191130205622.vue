<template>
  <div class="goods-item">
    <img src="" alt="">
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
      goods: {
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