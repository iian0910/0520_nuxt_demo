<template>
  <div>
    <el-dialog
      :title="data.name"
      :visible.sync="baiduMapVisible"
      :before-close="handleClose"
      width="30%"
      v-if="data">
      <img :src="data.bg" class="image">
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="closeDialog">確定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      baiduMapVisible: false,
      data: null
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('確認關閉？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    openDialog (item) {
      this.data = item
      this.baiduMapVisible = true
    },
    closeDialog () {
      this.baiduMapVisible = false
    }
  }
}
</script>
<style lang="scss">

</style>
