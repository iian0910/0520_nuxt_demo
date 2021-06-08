<template>
  <form @submit.prevent="submit">
    <input
      v-model="id"
      type="text"
    >
    <button type="submit">
      {{ text }}
    </button>
  </form>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
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
