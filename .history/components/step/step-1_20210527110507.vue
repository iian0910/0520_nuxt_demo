<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }" ref="form" tag="div">
      <div class="info">
        <ValidationProvider
          name="姓名"
          rules="required"
          v-slot="{ errors }"
          mode="lazy"
        >
          <label class="cus-label" for="name">
            姓名
            <span class="err-text" v-if="errors[0]">{{ errors[0] }}</span>
          </label>
          <el-input id="name" v-model="formData.name" class="cus-input" placeholder="姓名" />
        </ValidationProvider>
        <label class="cus-label" for="tel">電話</label>
        <el-input id="tel" v-model="formData.tel" class="cus-input" placeholder="電話" />
        <div class="cus-input">
          <label class="cus-label">縣市</label>
          <el-input v-model="formData.zip" class="zip-input" placeholder="區碼" disabled />
          <el-select v-model="formData.city" class="city-input" placeholder="縣市" @change="changeCity">
            <el-option value="">
              請選擇
            </el-option>
            <el-option v-for="(item, index) in cities" :key="index" :value="item">
              {{ item }}
            </el-option>
          </el-select>
          <el-select v-model="formData.area" class="area-input" placeholder="區域" @change="getZipCode($event)">
            <el-option value="">
              請選擇
            </el-option>
            <el-option v-for="(item, index) in districts" :key="index" :value="item.name">
              {{ item.name }}
            </el-option>
          </el-select>
        </div>
        <label class="cus-label" for="address">地址</label>
        <el-input id="address" v-model="formData.address" class="cus-input" placeholder="地址" />
      </div>
      <div class="stepper">
        <el-button class="step-btn" @click="handleSubmit(next)">
          下一步
        </el-button>
      </div>
    </ValidationObserver>
  </div>
</template>
<script>
const postData = require('~/assets/post.json')

export default {
  data () {
    return {
      formData: {
        name: '',
        tel: '',
        city: '',
        zip: '',
        area: '',
        address: ''
      }
    }
  },
  computed: {
    cities () {
      return postData.map((item) => {
        return item.name
      })
    },
    districts () {
      let districts = []
      if (this.formData.city !== '') {
        districts = postData.find((item) => {
          return item.name === this.formData.city
        }).districts.map((item) => {
          return item
        })
      }
      return districts
    }
  },
  mounted () {
    console.log('step-1')
    if (this.$store.state.item) {
      this.formData = { ...this.$store.state.item }
    }
    this.formData = null
  },
  methods: {
    getZipCode (event) {
      const obj = this.districts.find((item) => {
        return item.name === event
      })
      this.formData.zip = obj.zip
    },
    changeCity () {
      this.formData.area = ''
      this.formData.zip = ''
    },
    next () {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        };
      })

      this.$store.commit('saveItem', this.formData)

      this.$emit('next')
    }
  }
}
</script>
<style scoped lang="scss">
.err-text {
  font-size: 12px;
  color: white;
  padding: 5px;
  border-radius: 3px;
  background-color: rgb(105, 163, 240);
  display: inline-block;
}
</style>
