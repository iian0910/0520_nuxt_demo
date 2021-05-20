<template>
  <div class="slug">
    <article>
      <h1>{{ mountain.title }}</h1>
      <section>
        <img :src="mountain.image" :alt="mountain.title" />
        <p>{{ mountain.description }}</p>
      </section>
      <button @click="goBack">Back</button>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios, params }) {
    const mountain = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    )
    return { mountain }
  },
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.slug {
  padding: 5px;
  width: 100%;
  height: 100%;
  display: block;
  border: 3px solid blue;
}
h1 span {
  color: brown;
}
</style>
