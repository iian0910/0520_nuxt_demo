<template>
  <div class="slug">
    <h1>RouteParamsSlug: <span>{{ $route.params.slug }}</span></h1>
  </div>
</template>
<script>
export default {

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
