<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: none
    }
  }
}
</script>

<style scoped>

</style>