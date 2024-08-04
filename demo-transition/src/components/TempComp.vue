<script setup>
defineProps({
  isShow: {
    Type: Boolean,
    required: true
  }
})
</script>
<template>
  <div v-if="isShow">ON</div>
  <!-- <div v-else>OFF</div> -->
</template>
