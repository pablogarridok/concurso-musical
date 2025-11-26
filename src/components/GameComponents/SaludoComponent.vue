<template>
  <div id="saludo">
    <p>¡¡Hola {{ userStore.nombre }}, pongamos a prueba tus conociminentos musicales!!</p>
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
#saludo {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding: 0 20px;
}

#saludo p {
  font-size: 1.9rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
  color: white;

  padding: 25px 35px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 18px;

  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);

  animation: fadeIn 0.8s ease-out, float 3s ease-in-out infinite;
}




</style>
