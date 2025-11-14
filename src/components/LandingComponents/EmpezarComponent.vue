<template>
  <div id="empezar">
    <p>¿Listo para afrontar el desafio?</p>
    <p>Demuestra que eres un experto en la semicorchea y alcanza el top mundial</p>
    <button class="btn-play2" @click="empezarJuego">Empezar Ahora!!</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/userStore'

const router = useRouter()
const userStore = useUserStore()

function empezarJuego() {
  if (userStore.nombre.trim() === '') {
    router.push('/name')
  } else {
    router.push('/game')
  }
}
</script>

<style scoped>
/* Caja Empezar */
#empezar {
  max-width: 550px;
  margin: 90px auto 50px;
  padding: 35px;
  background: rgba(34, 30, 55, 0.85);
  border-radius: 20px;
  border: 1px solid rgba(124, 92, 252, 0.35);
  box-shadow: 0 0 45px rgba(124, 92, 252, 0.25);
  backdrop-filter: blur(10px);
  animation: floatUp 0.9s ease forwards;
  opacity: 0;
}

@keyframes floatUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    transform: translateY(20px);
  }
}

#empezar p {
  font-size: 1.15rem;
  margin-bottom: 14px;
  color: #d3cdee;
}

/* Botón dentro del cuadro */
.btn-play2 {
  margin-top: 18px;
  padding: 14px 28px;
  border: none;
  background: #7c5cfc;
  color: white;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s;
}

.btn-play2:hover {
  background: #6a4af4;
  transform: scale(1.06);
}
</style>
