<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

onMounted(() => {
  console.log('conmpC onMounted')
})
onUnmounted(() => {
  console.log('compC unMounted')
})

const count = ref(0)
</script>
<template>
  <h1>Comp C</h1>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
