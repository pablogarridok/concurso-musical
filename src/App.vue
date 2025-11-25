<template>
  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from './components/NavBar.vue'
</script>

<style scoped>
:root {
  --color-bg: #0f0e17;
  --color-bg2: #2a1850;
  --color-accent: #7e55dd;
  --color-accent-light: #b899ff;
  --color-text: #ffffff;
  --color-wrong: #ff5555;
  --color-correct: #22dd88;
  --radius: 14px;
}

body {
  font-family: 'Inter', sans-serif;
}

</style>
