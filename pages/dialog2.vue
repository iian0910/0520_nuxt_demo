<template>
  <div>
    <el-container>
      <el-main>
        <el-button type="primary" @click="openDialog">
          資料輸入
        </el-button>
        <label class="cus-label" for="name">姓名</label>
        <el-input id="name" v-model="data.username" class="cus-input" />
        <label class="cus-label" for="tel">電話</label>
        <el-input id="tel" v-model="data.tel" class="cus-input" />
      </el-main>
    </el-container>

    <!-- dialog -->
    <!-- <el-dialog
      title="請輸入"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <label class="cus-label" for="username">姓名</label>
      <el-input id="username" v-model="formData.username" class="cus-input" placeholder="姓名" />
      <label class="cus-label" for="tel">電話</label>
      <el-input id="tel" v-model="formData.tel" class="cus-input" placeholder="電話" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">
          取 消
        </el-button>
        <el-button type="primary" @click="saveData(formData)">
          確定
        </el-button>
      </span>
    </el-dialog> -->
    <Dialog2 :centerDialogVisible="centerDialogVisible" @save="saveData" @cancel="cancelData" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      centerDialogVisible: false,
      data: {
        username: '',
        tel: ''
      }
    }
  },
  methods: {
    openDialog () {
      this.centerDialogVisible = true
    },
    saveData (val) {
      this.centerDialogVisible = false
      if (val.username !== '' && val.tel !== '') {
        this.data.username = val.username
        this.data.tel = val.tel
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
