<template>
  <el-dialog
    title="請輸入"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="30%"
    center
  >
    <label class="cus-label" for="username">姓名</label>
    <el-input id="username" v-model="formData.username" class="cus-input" placeholder="姓名" />
    <label class="cus-label" for="tel">電話</label>
    <el-input id="tel" v-model="formData.tel" class="cus-input" placeholder="電話" />
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
        username: '',
        tel: ''
      }
    }
  },
  // watch (newVal, oldVal)
  watch: {
    centerDialogVisible (newVal) {
      this.dialogVisible = newVal
      this.formData.username = ''
      this.formData.tel = ''
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
