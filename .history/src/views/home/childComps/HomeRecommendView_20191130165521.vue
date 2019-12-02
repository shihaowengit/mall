<template>
  <div class="recommend">
    <div v-for="item in commends" :key="item.link"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
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