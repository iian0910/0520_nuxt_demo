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
import axios from 'axios'
export default {
  async asyncData () {
    const mountains = await axios.get('https://api.nuxtjs.dev/mountains')
    return { mountains }
  }
}
</script>
<style lang="scss">

</style>
