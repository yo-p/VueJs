<script setup>
import { defineAsyncComponent, ref, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
// import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
import BaseLoader from './components/BaseLoader.vue'
import ErrorMessage from './components/ErrorMessage.vue'

// const CompB = defineAsyncComponent(() => import('./components/CompB.vue'))
const CompB = defineAsyncComponent({
  loader: () => import('./components/CompB.vue'),
  loadingComponent: BaseLoader,
  delay: 200,
  errorComponent: ErrorMessage,
  timeout: 2000
})

const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>ダイナミック コンポーネント</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp"></component>
</template>
