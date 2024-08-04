<script setup>
import { ref } from 'vue'
import { useRefLimitedHistory } from './composables/limitedHistory'

const count = ref(0)
const { history, undo } = useRefLimitedHistory(count, ref(3))
const userInput = ref('')
const { history: userInputHistory, undo: userInputUndo } = useRefLimitedHistory(userInput, 5)
</script>
<template>
  <h2>count</h2>
  <p>count: {{ count }}</p>
  <button @click="count++">+1</button>
  <p>history: {{ history }}</p>
  <button @click="undo">undo</button>
  <h2>user input</h2>
  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>userInputHistory: {{ userInputHistory }}</p>
  <button @click="userInputUndo">undo</button>
</template>
