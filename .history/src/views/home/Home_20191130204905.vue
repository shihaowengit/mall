<template>
<div id="home">
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends = 'recommends'></recommend-view>
  <feature-view/>
  <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
</div>
  
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/HomeFeatureView'

import NavBar from 'components/common/navbar/NavBar'

import TabControl from 'components/content/tabcontrol/TabControl'

  import { getHomeMultidata, getHomeGoods } from "network/home"

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  created() {
    this.getHomeMultidata();
    
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomeMultidata() {
        getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>