<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
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
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
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

  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 3px;
    border-bottom: 2px solid var(--color-tint);
  }
</style>