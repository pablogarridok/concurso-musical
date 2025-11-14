<template>
  <div id="hero">
    <h1>¿Cuánto sabes de música?</h1>

    <p class="description">
      ¿Crees que tienes conocimientos de sobra sobre la semicorchea, la semidifusa y la clave de
      sol? ¡Ponte a prueba con este concurso! Escucharás fragmentos aleatorios de
      <strong>5 segundos</strong> y tendrás que adivinar a qué canción pertenecen.
    </p>

    <div id="buttons">
      <button @click="empezarJuego" class="btn-play">¡Jugar!</button>
      <button class="btn-ranking">Ver Ranking</button>
    </div>
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
/* Hero */
#hero {
  margin-top: 40px;
  margin-bottom: 60px;
  animation: fadeIn 0.9s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ffffff;
}

.description {
  font-size: 1.15rem;
  max-width: 620px;
  margin: auto;
  color: #c8c4dd;
  line-height: 1.7;
  margin-bottom: 45px;
}

/* Botones */
#buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn-play,
.btn-ranking {
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s ease;
  border: none;
}

.btn-play {
  background: #7c5cfc;
  color: #fff;
}
.btn-play:hover {
  background: #6a4af4;
  transform: translateY(-3px) scale(1.04);
}

.btn-ranking {
  background: #2d2a41;
  color: #fff;
}
.btn-ranking:hover {
  background: #463f6d;
  transform: translateY(-3px) scale(1.04);
}
</style>
