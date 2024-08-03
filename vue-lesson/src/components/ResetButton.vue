<script setup>
const emit = defineEmits(['resetCount'])
function emitReset() {
  emit('resetCount', 1000)
}
</script>

<template>
  <button @click="emitReset">Reset</button>
</template>
