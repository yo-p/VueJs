<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'
import CompBChiled from './CompBChiled.vue'

onMounted(() => {
  console.log('conmpB onMounted')
})
onUnmounted(() => {
  console.log('compB unMounted')
})
onActivated(() => {
  console.log('compB onActivated')
})
onDeactivated(() => {
  console.log('compB onDeActivated')
})

const count = ref(0)
</script>
<template>
  <h1>Comp B</h1>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
  <CompBChiled />
</template>
