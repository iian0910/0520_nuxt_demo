<template>
  <div>
    <div class="info">
      <label class="cus-label" for="name">姓名</label>
      <el-input id="name" v-model="getData.name" class="cus-input" placeholder="姓名" disabled />
      <label class="cus-label" for="tel">電話</label>
      <el-input id="tel" v-model="getData.tel" class="cus-input" placeholder="電話" disabled />
      <div class="cus-input">
        <label class="cus-label">縣市</label>
        <el-input v-model="getData.zip" class="zip-input" placeholder="區碼" disabled />
        <el-input v-model="getData.city" class="city-input" placeholder="縣市" disabled />
        <el-input v-model="getData.area" class="area-input" placeholder="區域" disabled />
      </div>
      <label class="cus-label" for="address">地址</label>
      <el-input id="address" v-model="getData.address" class="cus-input" placeholder="地址" disabled />
    </div>
    <div class="stepper">
      <el-button class="step-btn" @click="pre">
        返回修改
      </el-button>
      <el-button class="step-btn" @click="next">
        下一步
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      getData: null
    }
  },
  created () {
    if (this.$store.state.item) {
      this.getData = this.$store.state.item
    }
  },
  methods: {
    next () {
      this.$emit('next')
    },
    pre () {
      this.$emit('pre')
    }
  }
}
</script>
<style lang="scss">

</style>
