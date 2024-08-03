<script setup>
import FoodCard from './components/FoodCard.vue'
import { ref } from 'vue'

const foods = ref([
  { name: '寿司', emoji: '🍣' },
  { name: 'ラーメン', emoji: '🍜' },
  { name: '丼系', emoji: '🍚' },
  { name: 'オムライス', emoji: '🥚' },
  { name: 'とんかつ', emoji: '🐖' },
  { name: '中華', emoji: '🇨🇳' },
  { name: '和食', emoji: '🇯🇵' },
  { name: 'イタリアン', emoji: '🇮🇹' }
])

const pickedFoodIdx = ref(0)
const newFoodIdx = ref(0)

function pickFood(index) {
  pickedFoodIdx.value = index
  newFoodIdx.value++
}
</script>

<template>
  <main>
    <h1 class="title">今日何食べる？</h1>
    <FoodCard
      :name="foods[pickedFoodIdx].name"
      :emoji="foods[pickedFoodIdx].emoji"
      @click="pickFood(pickedFoodIdx)"
    />
    <template v-if="newFoodIdx < foods.length">
      <p>VS</p>
      <FoodCard
        :name="foods[newFoodIdx].name"
        :emoji="foods[newFoodIdx].emoji"
        @click="pickFood(newFoodIdx)"
      />
    </template>
  </main>
</template>

<style scoped>
main {
  width: 350px;
  margin: 100px auto;
  text-align: center;
}

.title {
  margin-bottom: 60px;
}
</style>
