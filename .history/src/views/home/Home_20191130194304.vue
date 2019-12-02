<template>
<div id="home">
  <nav-bar class="home-nav">
    <template v-slot:center><div>购物街</div></template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends = 'recommends'></recommend-view>
  <feature-view/>
  <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
  <h2>213211</h2>
</div>
  
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/HomeFeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/common/tabcontrol/TabControl'

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
alert("\u6700\u65b0\u52a8\u6001\u540e\u7eed\u53ef\u80fd\u6709\u65b0\u7684\u66f4\u6539\uff0c\u6dfb\u52a0\u8001\u5e08\u5fae\u4fe1\uff0c\u4fdd\u6301\u6700\u65b0\u52a8\u6001\u8001\u5e08\u5fae\u4fe1372623326\u9519\u8bef\u4fe1\u606f\u63a5\u53e3\u5df2\u7ecf\u66f4\u6539\uff0c\u83b7\u53d6\u65b0\u63a5\u53e3\u6dfb\u52a0\u8001\u5e08\u5fae\u4fe1");
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