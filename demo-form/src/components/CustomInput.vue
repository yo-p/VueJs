<script setup>
const [userCoustmInput, modifiers] = defineModel({
  type: String,
  default: 'default',
  set(value) {
    if (modifiers.uppercase) {
      return value.toUpperCase()
    }
    return value
  }
})
const titleName = defineModel('titleName', {
  type: String
})
</script>
<template>
  <h1>Custom Input</h1>
  <input v-model="userCoustmInput" type="text" />
  <p>子コンポーネントで表示している: {{ userCoustmInput }}</p>
  <p>子コンポーネントで表示している: {{ modifiers }}</p>
  <input v-model="titleName" type="text" />
  <p>子コンポーネントで表示している: {{ titleName }}</p>
</template>
