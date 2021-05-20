<template>
  <div>
    <ul>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink
          :to="{ name: 'post/slug', params: { slug: mountain.slug } }"
        >
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios }) {
    const mountains = await $axios.$get('https://api.nuxtjs.dev/mountains')
    console.log('mountains', mountains)
    return { mountains }
  }
}
</script>
<style lang="scss">

</style>
