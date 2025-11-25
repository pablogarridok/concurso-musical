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
  color: var(--color-accent-light);
  font-size: 1.2rem;
}
</style>
