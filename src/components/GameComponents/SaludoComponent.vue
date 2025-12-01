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
#saludo p {
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 600;
  max-width: 700px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  #saludo p {
    font-size: 1.4rem;
  }
}
</style>
