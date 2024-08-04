<script setup>
import { ref } from 'vue'

const isShow = ref(true)
const fruits = ref(['apple', 'banana', 'grap'])
function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
let enterIntervalId
function enter(el, done) {
  console.log('enter', el)
  let count = 30
  enterIntervalId = setInterval(() => {
    count -= 1
    el.style.transform = `translateX(${count}px)`
    if (count === 0) {
      clearInterval(enterIntervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
function enterCancelled(el) {
  console.log('enterCancelled', el)
  clearInterval(enterIntervalId)
}
function beforeLeave(el) {
  console.log('beforeLeave', el)
}
let leavIntervalId
function leave(el, done) {
  console.log('leave', el)
  let count = 0
  leavIntervalId = setInterval(() => {
    count += 1
    el.style.transform = `translateX(${count}px)`
    if (count === 30) {
      clearInterval(leavIntervalId)
      done()
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
function leaveCancelled(el) {
  console.log('leaveCancelled', el)
  clearInterval(leavIntervalId)
}
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">show</button>
  <Transition
    mode="out-in"
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <div v-show="isShow">ON</div>
  </Transition>
  <input type="text" v-model="newFruit" />
  <button @click="fruits.unshift(newFruit)">add</button>
  <TransitionGroup name="fade" tag="div">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
  <!-- <Transition name="slide" appear>
    <div v-if="isShow">Hello slide</div>
  </Transition> -->
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-move {
  transition: transform 1s;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide 1s;
}
.slide-leave-active {
  animation: slide 1s reverse;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
