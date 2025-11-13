<template>
  <div>
    <p>Hola {{ userStore.nombre }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
</script>

<style scoped></style>
