<template>
<div class="cart-list">
  <scroll class="scroll" ref="scroll">
    <div class="cart-list">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'

  import { mapGetters } from 'vuex'

	export default {
		name: "CartList",
    components: {
      Scroll, 
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    }
	}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px);
  }

  .scroll {
    height: 100%;
  }
</style>
