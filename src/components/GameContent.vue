<template>
  <div>
    <p>Hola {{ useStore.nombre }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
const useStore = useUserStore()
</script>

<style scoped></style>
