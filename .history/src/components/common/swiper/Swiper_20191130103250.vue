<template>
  <div class="swiper-wrap">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0,
      totalWidth: 0,
      swiperStyle: {},
      currentIndex: 1,
      scrolling: false
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.handleDom();

      this.startTimer();
    }, 100)
  },
  methods: {
    handleDom() {
      let swiperEl = document.querySelector('.swiper');
      let slideEls = swiperEl.getElementsByClassName('slide');

      this.slideCount = slideEls.length;

      if (this.slideCount > 1) {
        let cloneFirst = slideEls[0].cloneNode(true);
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
    },
    // 定时器
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval)
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    // 滚动到正确位置
    scrollContent(currentPosition) {
      // 开始滚动
      this.scrolling = true;

      // 滚动动画
      this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
      this.setTransform(currentPosition);

      // 判断滚动位置
      this.checkPosition();

      // 滚动完成
      this.scrolling = false;
    },

    // 校验正确位置
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this,currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this,currentIndex * this.totalWidth);
        }
      }, this.animDuration)
    },

    // 设置滚动的位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`;
    }
  }
}
</script>

<style>

</style>