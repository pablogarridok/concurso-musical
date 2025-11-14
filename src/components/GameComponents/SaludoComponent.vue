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

<style scoped></style>
