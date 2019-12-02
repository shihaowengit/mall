<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      show: false
    }
  }
  
}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999;
    padding: 8px 10px;
    transform: translate(-50%, -50%)

    background-color: rgba(0, 0, 0, .75);
    color: #fff;
  }
</style>