<template>
  <div>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }">
          {{ mountain.title }}
        </NuxtLink>
        <Nuxt />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // async asyncData ({ $axios }) {
  //   const mountains = await $axios.$get('https://api.nuxtjs.dev/mountains')
  //   return { mountains }
  // }
  data () {
    return {
      mountains: []
    }
  },
  mounted () {
    this.fetchSomething()
  },
  methods: {
    async fetchSomething ({ $axios }) {
      this.mountains = await $axios.$get('https://api.nuxtjs.dev/mountains')
    }
  }
}
</script>
<style lang="scss">

</style>
