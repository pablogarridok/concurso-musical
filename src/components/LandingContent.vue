<template>
  <section class="landing">
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
    <div id="reglas">
      <h2>Reglas del juego</h2>
      <ul>
        <li>Escucharás fragmentos de 5 segundos de diferentes canciones.</li>
        <li>Tendrás que elegir la canción correcta entre varias opciones.</li>
        <li>Gana 10 puntos por pregunta acertada y sube posiciones en el ranking</li>
      </ul>
    </div>
    <div id="empezar">
      <p>¿Listo para afrontar el desafio?</p>
      <p>Demuestra que eres un experto en la semicorchea y alcanza el top mundial</p>
      <button class="btn-play2" @click="empezarJuego">Empezar Ahora!!</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import {useUserStore} from "../stores/userStore"

const router = useRouter()
const userStore = useUserStore();

function empezarJuego() {
  if (userStore.nombre.trim() === ""){
      router.push("/name")
    }
    else {
      router.push("/game")
    }
}
</script>

<style scoped>
.landing {
  padding: 80px 20px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

:global(html, body) {
  overflow-x: hidden; /* bloquea scroll horizontal */
  margin: 0;
  padding: 0;
}

/* Fondo degradado moderno */
:global(body) {
  background: linear-gradient(145deg, #0f0e17, #7e55dd);

  margin: 0;
  padding: 0;
}

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

/* Reglas */
#reglas {
  margin-top: 70px;
}

#reglas h2 {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #ffffff;
}

#reglas ul {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}

/* Tarjetas Neón suaves */
#reglas li {
  background: linear-gradient(135deg, #27233d, #7c5cfc);
  border-radius: 18px;
  padding: 26px 30px;
  width: 260px;
  box-sizing: border-box;
  max-width: 100%;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 500;
  box-shadow: 0 0 30px rgba(124, 92, 252, 0.35);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

#reglas li:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 0 45px rgba(124, 92, 252, 0.55);
}

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
