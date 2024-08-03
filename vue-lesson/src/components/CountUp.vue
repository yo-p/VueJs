<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  nextTick
} from 'vue'
const count = ref(0)
console.log('script setup')
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

async function countUp() {
  count.value++
  await nextTick()
  console.log('nextTick')
}
</script>
<template>
  <h1 class="red">CountUp 子コンポーネント</h1>
  <p class="red">count : {{ count }}</p>
  <button @click="countUp">+1</button>
</template>
<style scoped>
.red {
  color: red;
}
</style>
