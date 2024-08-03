<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

onMounted(() => {
  console.log('conmpA onMounted')
})
onUnmounted(() => {
  console.log('compA unMounted')
})

const count = ref(0)
</script>
<template>
  <h1>Comp A</h1>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
