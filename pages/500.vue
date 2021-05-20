<template>
  <div class="my-box">
    <h3>500 Not Found</h3>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
html,
body {
  background-color: rgb(157, 244, 250);
  position: relative;
}
.my-box {
  width: 100vw;
  height: calc(100vh - 61px);
}
h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
}
</style>
