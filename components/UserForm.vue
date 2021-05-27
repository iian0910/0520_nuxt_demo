<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="id" />
    <button type="submit">{{ text }}</button>
  </form>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      id: ''
    }
  },
  methods: {
    submit () {
      this.$emit('submit', { id: this.id })
    }
  }
}
</script>
<style lang="scss">

</style>
