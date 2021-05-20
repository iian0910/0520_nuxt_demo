<template>
  <div>
    <div class="info">
      <img class="image" src="https://media.istockphoto.com/photos/yellow-thank-you-postit-note-with-smiley-picture-id521694586?k=6&m=521694586&s=170667a&w=0&h=gpR2fkTQlLmDJWujKr5VEOP05vkp0gFBZ7O9BN664C8=" alt="">
    </div>
    <div class="stepper">
      <el-button class="step-btn" @click="done">
        完成
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pre () {
      this.$emit('pre')
    },
    done () {
      this.$store.commit('resetItem')
      this.$emit('done')
    }
  }
}
</script>
<style lang="scss">

</style>
