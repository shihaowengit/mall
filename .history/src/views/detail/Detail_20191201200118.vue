<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="detailNavBar" @titleClick="titleClick" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="showBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";

  import { itemListenerMixin, backTopMixin } from "common/mixin"
  import {debouce} from "common/utils";


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid

      // 根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 获取顶部的图片轮播数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      }),

      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      this.getThemeTopY = debouce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs)
      })
    },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    methods: {
      imageLoad() {
        this.newRefresh()

        this.getThemeTopY()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
      },
      contentScroll(position) {
        const positionY = -position.y
        
        let length = this.themeTopYs.length
        for(let i = 0; i < length; i++) {
          
          if (this.currentIndex !== i && ((i < length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY > this.themeTopYs[i]))) {
            this.currentIndex = i
            // console.log(this.currentIndex)
            this.$refs.detailNavBar.currentIndex = this.currentIndex
          }
        }
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow-y: hidden;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 102px);
  }
</style>
