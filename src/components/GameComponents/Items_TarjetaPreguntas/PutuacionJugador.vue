<template>
  <div>
    <h3>Puntuacion: {{ puntuacion }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../../../stores/userStore'
const userStore = useUserStore()
let puntuacion = ref(userStore.puntuacionTotal)
</script>

<style scoped></style>
