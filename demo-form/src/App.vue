<script setup>
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'
const userInput = ref('')
const message = ref('')
const checked = ref('not checked')
const fruts = ref([])
const gender = ref('')
const selected = ref([])
const userCoustmInput = ref('hello')
const titeInput = ref('title')
</script>
<template>
  <!-- <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model.lazy="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model.trim.number="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>
  <input
    id="checkbox"
    v-model="checked"
    type="checkbox"
    true-value="checked"
    false-value="not checked"
  />
  <label for="checkbox">{{ checked }}</label>
  <p>Fruits</p>
  <input id="Apple" v-model="fruts" type="checkbox" value="Apple" name="" />
  <label for="Apple">Apple</label>
  <input id="Banana" v-model="fruts" type="checkbox" value="Banana" name="" />
  <label for="Banana">Banana</label>
  <input id="Grap" v-model="fruts" type="checkbox" value="Grap" name="" />
  <label for="Grap">Grap</label>
  <p>{{ fruts }}</p>
  <h2>Radio</h2>
  <input id="male" v-model="gender" type="radio" value="male" />
  <label for="male">male</label>
  <input id="female" v-model="gender" type="radio" value="female" />
  <label for="female">female</label>
  <p>{{ gender }}</p>
  <h2>Select</h2>
  <select v-model="selected">
    <option value="" disabled>select one</option>
    <option v-for="option in ['A', 'B', 'C']" :key="option" :value="option">{{ option }}</option>
  </select> -->
  <p>{{ selected }}</p>
  <h2>Componet</h2>
  <CustomInput v-model.uppercase="userCoustmInput" v-model:title-name="titeInput" />
  <p>親コンポーネントで表示しているcustomIput: {{ userCoustmInput }}</p>
  <p>親コンポーネントで表示しているタイトル: {{ titeInput }}</p>
</template>
