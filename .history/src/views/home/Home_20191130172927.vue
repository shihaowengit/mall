<template>
<div id="home">
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends = 'recommends'></recommend-view>
  <feature-view/>>
  <tab-control :titles="titles"></tab-control>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/common/tabcontrol/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/HomeFeatureView'

import {getHomeMultidata} from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>