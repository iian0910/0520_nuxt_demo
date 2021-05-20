<template>
  <el-container class="main">
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-steps :active="active" finish-status="success">
            <el-step title="步驟 1" />
            <el-step title="步驟 2" />
            <el-step title="步驟 3" />
          </el-steps>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <step1 v-if="active === 0" @next="next" />
          <step2 v-if="active === 1" @next="next" @pre="pre" />
          <step3 v-if="active === 2" @pre="pre" @done="done" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import step1 from '~/components/steeper/step-1.vue'
import step2 from '~/components/steeper/step-2.vue'
import step3 from '~/components/steeper/step-3.vue'

export default {
  components: {
    step1,
    step2,
    step3
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    pre () {
      this.active--
    },
    next () {
      this.active++
    },
    done () {
      alert('恭喜完成')
      this.active = 0
    }
  }
}
</script>
<style lang="scss">
.main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
