<template>
    <router-view/>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue' // 路由中添加key解决切换路由时页面不展示内容，刷新后才展示内容问题
const route = useRoute()
const key = computed(() => {
  // console.log(route.path + Math.random())
  return route.path + Math.random()
})
// console.log('key', key)
</script>
