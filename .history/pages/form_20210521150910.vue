<template>
  <el-container>
    <el-main>
      <el-row :gutter="40">
        <ValidationObserver v-slot="{ handleSubmit }" ref="form" tag="div">
          <!-- 顯示多筆驗證 -->
          <el-col :xs="24" :md="12" class="col-mb">
            <ValidationProvider
              name="欄位1"
              mode="lazy"
              :bails="false"
              rules="required|minmax:3,8"
              v-slot="{ errors, classes }"
            >
              <label for="name">顯示多筆驗證<span>*</span></label>
              <div :class="classes">
                <el-input id="name" v-model="info" clearable></el-input>
                <ul class="m-0 p-0" style="list-style: none">
                  <li v-for="(error, idx) in errors" :key="idx" class="error-info">{{ error }}</li>
                </ul>
              </div>
            </ValidationProvider>
          </el-col>

          <!-- 顯示單筆驗證 -->
          <el-col :xs="24" :md="12">
            <ValidationProvider
              name="欄位2"
              mode="lazy"
              rules="required|minmax:3,8"
              v-slot="{ errors, classes }"
            >
              <label for="tel">顯示單筆驗證</label>
              <div :class="classes">
                <el-input id="tel" v-model="info2" clearable></el-input>
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </el-col>

          <!-- 檔案上傳 Vee-validator -->
          <el-col :span="24">
            <ValidationProvider
              name="Vee圖片欄位"
              rules="required|image"
              v-slot="{ errors, validate, classes }"
            >
              <label for="">
                <input class="upload-btn" type="file" @change="validate">
              </label>
              <span :class="classes">{{ errors[0] }}</span>
            </ValidationProvider>
          </el-col>

          <!-- 日期不得小於今日 -->
          <el-col :span="24">
            <label>日期不得小於今日</label>
            <ValidationProvider
              name="日期欄位"
              rules="required|isBeforeDate"
              v-slot="{ errors, classes }"
            >
              <el-date-picker
                v-model="beforeDate"
                type="date"
                placeholder="選擇日期">
              </el-date-picker>
              <span :class="classes">{{ errors[0] }}</span>
            </ValidationProvider>
          </el-col>

          <!-- 起日不能早於訖日 -->
          <el-col :span="24">
            <label>起日不能早於訖日</label>
            <ValidationProvider
              name="confirmation"
              rules="required"
            >
              <el-date-picker
                v-model="date1"
                type="date"
                placeholder="選擇日期"
              >
              </el-date-picker>
            </ValidationProvider>
            <ValidationProvider
              rules="required|betweenDate:@date1"
              v-slot="{ errors, classes }"
            >
              <el-date-picker
                v-model="date2"
                type="date"
                placeholder="選擇日期"
              >
              </el-date-picker>
              <span :class="classes">{{ errors[0] }}</span>
            </ValidationProvider>
          </el-col>

          <!-- 起訖日不得相差3個月 -->
          <el-col :span="24">
            <label>起訖日不得相差3個月</label>
            <ValidationProvider
              name="confirm"
              rules="required"
            >
              <el-date-picker
                v-model="date3"
                type="date"
                placeholder="選擇日期"
                :picker-options="expireTimeOption"
              >
              </el-date-picker>
            </ValidationProvider>
            <ValidationProvider
              rules="required|differentThreeMonths:@date3"
              v-slot="{ errors, classes }"
            >
              <el-date-picker
                v-model="date4"
                type="date"
                placeholder="選擇日期"
                :picker-options="expireTimeOption"
              >
              </el-date-picker>
              <span :class="classes">{{ errors[0] }}</span>
            </ValidationProvider>
          </el-col>

          <!-- 起訖日不得相差90天 -->
          <el-col :span="24">
            <label>起訖日不得相差90天</label>
            <ValidationProvider
              name="confirm"
              rules="required"
            >
              <el-date-picker
                v-model="date5"
                type="date"
                placeholder="選擇日期"
                :picker-options="expireTimeOption"
                value-format="yyyy/MM/dd"
                format="yyyy 年 MM 月 dd 日"
              >
              </el-date-picker>
            </ValidationProvider>
            <ValidationProvider
              rules="required|diff90Day:@date5"
              v-slot="{ errors, classes }"
            >
              <el-date-picker
                v-model="date6"
                type="date"
                placeholder="選擇日期"
                :picker-options="expireTimeOption"
                value-format="yyyy/MM/dd"
                format="yyyy 年 MM 月 dd 日"
              >
              </el-date-picker>
              <span :class="classes">{{ errors[0] }}</span>
            </ValidationProvider>
          </el-col>

          <!--
            action            :上傳位置
            list-type         :顯示清單樣式( 預設:文字 / picture:圖+文 )
            drag              :開啟拖曳上傳
            multiple          :上傳檔案多選(不放則單選)
            :on-preview       :點擊上傳成功之檔案時觸發
            :on-remove        :移除檔案後觸發
            :before-remove    :移除檔案前觸發
            :limit            :在多選的情境下，最多一次上傳數量
            :on-exceed        :在多選的情境下，選超過限制數量按下確定後觸發
            :file-list        :上傳檔案清單
            :show-file-list   :使否要顯示上傳檔案之名稱列表
            :on-success       :上傳成功後觸發
            :on-error         :上傳失敗後觸發
            :before-upload    :限制上傳的圖片格式大小
          -->
          <!-- 上傳檔案(清單文字顯示) -->
          <!-- <el-col :span="24">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-error="handleError"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">點擊上傳</el-button>
              <div slot="tip" class="el-upload__tip">只能上傳jpg/png文件，且不超過500K</div>
            </el-upload>
          </el-col> -->

          <!-- 上傳檔案(顯示頭像) -->
          <!-- <el-col :span="24">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="true"
              :on-success="handleAvatarSuccess"
              :on-error="handleAvatarError"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col> -->

          <!-- 上傳檔案(清單圖文顯示) -->
          <!-- <el-col :span="24">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture">
              <el-button size="small" type="primary">點擊上傳</el-button>
              <div slot="tip" class="el-upload__tip">只能上傳jpg/png文件，且不超過500K</div>
            </el-upload>
          </el-col> -->

          <!-- 上傳檔案(拖曳上傳) -->
          <!-- <el-col :span="24">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              list-type="picture">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">將文件拖曳到此處，或<em>點擊上傳</em></div>
              <div class="el-upload__tip" slot="tip">只能上傳jpg/png文件，且不超過500K</div>
            </el-upload>
          </el-col> -->

          <!-- 送出 -->
          <el-col :spen="24">
            <el-button type="primary" @click="handleSubmit(onSubmit)">Submit</el-button>
          </el-col>
        </ValidationObserver>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      info: '',
      info2: '',
      fileName: '',
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      imageUrl: '',
      isUploadError: false,
      beforeDate: null,
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      expireTimeOption: {
        disabledDate (date) {
          return date.getTime() < Date.now() - 24 * 60 * 60 * 1000
        }
      }
    }
  },
  mounted () {
    console.log('HI')
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        }
        alert('Form has been submitted!')
        this.info = ''
        this.info2 = ''

        this.$nextTick(() => {
          console.log('reset()', this.$refs)
          this.$refs.form.reset()
        })
      })
    },
    checkFile () {
      document.querySelector('#fileinput').click()
    },
    checkFileSure () {
      console.log(document.querySelector('#fileinput').files[0])
      this.fileName = document.querySelector('#fileinput').files[0].name
    },
    handleRemove (file, fileList) {
      console.log('handleRemove', file, fileList)
    },
    handlePreview (file) {
      console.log('handlePreview', file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleAvatarSuccess (res, file) {
      console.log('HASRes', res)
      console.log('HASFile', file)
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    handleAvatarError (res, file) {
      console.log('HAERes', res)
      console.log('HAEFile', file)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleError () {
      this.isUploadError = true
    }
  }
})
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-input input {
  width: 100%;
  font-size: 16px;
  padding: 10px;
}
.col-mb {
  margin-bottom: 20px;
}
.invalid {
  color: #EB0600;
}
.invalid input {
  border: 1px #EB0600 solid
}
.valid {
  color: green;
}
.valid input {
  border: 1px solid green
}
.m-0{
  margin: 0;
}
.p-0{
  padding: 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-col.el-col-24 {
  margin-bottom: 20px;
}
.upload-btn {
  display: block
}
.upload-btn::-webkit-file-upload-button {
  width: 1px;
  position: absolute;
  left: -9999px;
}
.upload-btn::before {
  margin-right: 5px;
  content: '點擊上傳';
  background-color: rgb(87, 172, 252);
  padding: 7px 14px;
  color: white;
  border-radius: 3px;
  display: inline-block;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  font-size: 13px;
}
.upload-btn:hover::before {
  background-color: rgb(56, 135, 209);
}
@media screen and (max-width: 991px) {
  .el-col {
    margin-bottom: 20px;
  }
}
</style>
