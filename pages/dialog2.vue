<template>
  <div>
    <el-container>
      <el-main>
        <el-button type="primary" @click="openDialog">
          資料輸入
        </el-button>
        <label class="cus-label" for="cardNo">Card No.</label>
        <el-input id="cardNo" v-model="data.cardNo" class="cus-input" disabled />
        <label class="cus-label" for="securityCode">Security Code</label>
        <el-input id="securityCode" v-model="data.securityCode" class="cus-input" disabled />
      </el-main>
    </el-container>

    <!-- dialog -->
    <Dialog2 :centerDialogVisible="centerDialogVisible" @save="saveData" @cancel="cancelData" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      centerDialogVisible: false,
      data: {
        cardNo: '',
        securityCode: ''
      }
    }
  },
  methods: {
    openDialog () {
      this.centerDialogVisible = true
    },
    saveData (val) {
      this.centerDialogVisible = false
      if (val.cardNo !== '' && val.securityCode !== '') {
        this.data.cardNo = val.cardNo
        this.data.securityCode = val.securityCode
      }
    },
    cancelData () {
      this.centerDialogVisible = false
    }
  }
}
</script>
<style lang="scss">

</style>
