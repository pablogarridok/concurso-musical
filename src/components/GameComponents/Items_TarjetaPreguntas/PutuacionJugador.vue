<template>
  <div>
    <h3>Puntuacion: {{ userStore.puntuacionTotal }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../../../stores/userStore'

const userStore = useUserStore()
</script>

<style scoped>
h3 {
  font-size: 1.1rem;
  color: #c8c4dd;
  margin: 0 0 8px 0;
  font-weight: 600;
}

p {
  font-size: 2rem;
  color: #7c5cfc;
  margin: 0;
  font-weight: 700;
}
</style>
