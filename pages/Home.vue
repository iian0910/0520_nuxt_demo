<template>
  <div class="home">
    <UserForm text="送出" />
    <button type="button" @click="gotoPage()">換頁</button>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Home',
  components: {
    UserForm
  },
  methods: {
    gotoPage () {
      this.$router.push({ path: 'posts/serviceAA' })
    }
  }
}
</script>
