<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration=1000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.show = false
        this.message = ''
      }, duration)
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
    border-radius: 5px;
    transform: translate(-50%, -50%);

    background-color: rgba(0, 0, 0, .75);
    color: #fff;
  }
</style>