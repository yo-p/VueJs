<script setup>
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave')
  return window.confirm('本当にこのページを離れますか？')
})
onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate')
})
const route = useRoute()
console.log(route)
</script>
<template>
  <div>
    <h1>My Blog</h1>
    <h2>Blog(id: {{ route.params.id }})</h2>
    <RouterLink
      :to="{
        name: 'blog',
        params: {
          id: Number(route.params.id) + 1
        }
      }"
      >next</RouterLink
    >
  </div>
</template>
