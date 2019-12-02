<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
</style>