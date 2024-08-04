<script setup>
import { useCounterStore } from './stores/counter'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <p>counter: {{ counterStore.count }}</p>
  <p>doubleCount: {{ counterStore.doubleCount }}</p>
  <p>{{ counterStore.count }}</p>
  <button @click="counterStore.count++">+1</button>
  <button @click="counterStore.increment">increment</button>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100px);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s;
}
</style>
