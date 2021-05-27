<template>
  <div>
    <el-carousel
      :autoplay="false"
      height="500px"
      trigger="click"
      class="carousel"
    >
      <el-carousel-item v-for="(item, index) in imgUrl" :key="index" :style="{ backgroundImage: 'url(' + item.bg + ')' }" class="bg-setting" />
    </el-carousel>
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col v-for="(item, index) in dialogData" :key="index" :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://images.freeimages.com/images/large-previews/a88/question-mark-1236555.jpg" class="image">
              <div style="padding: 14px;">
                <span>{{ item.name }}</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button" @click="openChina(item)">按鈕</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <Dialog ref="china" />
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      imgUrl: [
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' },
        { bg: 'https://fakeimg.pl/2500x1000/' }
      ],
      dialogData: [
        {
          name: '小豬1',
          bg: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/337949683/android/sticker.png'
        },
        {
          name: '小豬2',
          bg: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/145478364/ANDROID/sticker.png'
        },
        {
          name: '小豬3',
          bg: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/145478357/ANDROID/sticker.png'
        },
        {
          name: '小豬4',
          bg: 'https://stickershop.line-scdn.net/stickershop/v1/product/15187/LINEStorePC/main.png;compress=true'
        }
      ]
    }
  },
  methods: {
    setStatus (val) {
      this.dialogVisible = val
    },
    openChina (item) {
      this.$refs.china && this.$refs.china.openDialog(item)
    }
  }
}
</script>
<style lang="scss">
.bg-setting {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.carousel {
  overflow: hidden;
  margin-bottom: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
