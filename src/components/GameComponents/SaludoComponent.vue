<template>
  <div id="saludo">
    <p>Hola {{ userStore.nombre }}, pongamos a prueba tus conociminentos musicales!!</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/userStore'
const userStore = useUserStore()

import router from '@/router'

if (userStore.nombre.trim() === '') {
  router.push('/name')
}
</script>

<style scoped>
#saludo p {
  font-size: 1.6rem;
  color: var(--color-text);
  margin-top: 80px;
  padding: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius);
}
</style>
