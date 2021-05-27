<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item :index="item.index" v-for="(item, idx) in navItem" :key="idx">
      <nuxt-link :to="item.link" class="link">{{item.name}}</nuxt-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '2',
      navItem: [
        {
          index: '0',
          link: '/',
          name: 'HOME'
        },
        {
          index: '1',
          link: '/guide',
          name: 'GUIDE'
        },
        {
          index: '2',
          link: '/form',
          name: 'FORM'
        },
        {
          index: '3',
          link: '/dialog',
          name: 'DIALOG'
        },
        {
          index: '4',
          link: '/step',
          name: 'STEP'
        }
        // {
        //   index: '5',
        //   link: '/post',
        //   name: 'POST'
        // }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.el-menu-item {
  padding: 0;
}
.link {
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}
</style>
