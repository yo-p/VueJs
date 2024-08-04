<template>
  <div>
    <h2>Home</h2>
    <p>{{ $route.meta }}</p>
    <h3>Blog</h3>
    <RouterLink
      :to="{
        name: 'blog',
        params: { id: 123 }
      }"
      >New Release!</RouterLink
    >
    <!-- <RouterView></RouterView> -->
  </div>
</template>
