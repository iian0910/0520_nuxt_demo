<!--
URL: https://blog.csdn.net/weixin_44296929/article/details/108512751
-->
<template>
  <el-carousel
    ref="carousel"
    class="carousel"
    type="card"
    height="200px"
    arrow="never"
    :autoplay="false"
  >
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">
        {{ item }}
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  mounted () {
    this.slideBanner()
  },
  methods: {
    slideBanner () {
      // 选中item的盒子
      const box = document.querySelector('.el-carousel__container')
      // 手指起点X坐标
      let startPoint = 0
      // 手指滑动重点X坐标
      let stopPoint = 0

      // 重置坐标
      const resetPoint = function () {
        startPoint = 0
        stopPoint = 0
      }

      // 手指按下
      box.addEventListener('touchstart', function (e) {
        // 手指按下的时候停止自动轮播
        this.stopAuto()
        // 手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageX
      })
      // 手指滑动
      box.addEventListener('touchmove', function (e) {
        // 手指滑动后终点位置X的坐标
        stopPoint = e.changedTouches[0].pageX
      })
      // 当手指抬起的时候，判断图片滚动离左右的距离
      box.addEventListener('touchend', function () {
        console.log('1：' + startPoint)
        console.log('2：' + stopPoint)
        if (stopPoint === 0 || startPoint - stopPoint === 0) {
          resetPoint()
          return
        }
        if (startPoint - stopPoint > 0) {
          resetPoint()
          this.$refs.carousel.next()
          return
        }
        if (startPoint - stopPoint < 0) {
          resetPoint()
          this.$refs.carousel.prev()
        }
      })
    }
  }
}
</script>
<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
