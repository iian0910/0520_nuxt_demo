<template>
  <div>
    <article>
      <h1>{{ mountain.title }}</h1>
      <section>
        <img :src="mountain.image" :alt="mountain.title">
        <p>{{ mountain.description }}</p>
      </section>
      <el-button type="primary" @click="goBack">
        Back
      </el-button>
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
article {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>
