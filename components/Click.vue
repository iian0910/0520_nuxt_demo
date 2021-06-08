<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="username" type="text" data-username>
      <input id="submitBtn" type="submit">
    </form>
    <div v-if="submitted" class="message">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      submitted: false
    }
  },
  methods: {
    handleSubmit () {
      this.submitted = true
    }
  }
}
</script>
<style lang="">

</style>
