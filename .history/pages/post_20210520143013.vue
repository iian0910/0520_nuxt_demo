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
  async asyncData ({ $http }) {
    const mountains = await $http.$get('https://api.nuxtjs.dev/mountains')
    return { mountains }
  }
}
</script>
<style lang="scss">

</style>
