<script setup>
defineProps({
  catchAll: { tye: Array, required: true }
})
</script>
<template>
  <h2>Not Found</h2>
  <p>{{ catchAll }}</p>
</template>
