<!--
  visible.sync            :控制 dialog 開關
  close-on-click-modal    :外部空白處是否可以關閉dialog
-->
<template>
  <el-dialog
    title="請輸入"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="30%"
    center
  >
    <label class="cus-label" for="cardNo">Card No.</label>
    <el-input id="cardNo" v-model="formData.cardNo" class="cus-input" placeholder="XXXX-XXXX-XXXX-XXXX" />
    <label class="cus-label" for="securityCode">Security Code</label>
    <el-input id="securityCode" v-model="formData.securityCode" class="cus-input" placeholder="" />
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelData">
        取 消
      </el-button>
      <el-button type="primary" @click="saveData(formData)">
        確定
      </el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: [
    'centerDialogVisible'
  ],
  data () {
    return {
      dialogVisible: false,
      formData: {
        cardNo: '',
        securityCode: ''
      }
    }
  },
  // watch (newVal, oldVal)
  watch: {
    centerDialogVisible (newVal) {
      this.dialogVisible = newVal
      this.formData.cardNo = ''
      this.formData.securityCode = ''
    }
  },
  methods: {
    saveData (item) {
      this.data = { ...item }
      this.$emit('save', this.data)
    },
    cancelData () {
      this.$emit('cancel', this.data)
    }
  }
}
</script>
<style lang="scss">

</style>
