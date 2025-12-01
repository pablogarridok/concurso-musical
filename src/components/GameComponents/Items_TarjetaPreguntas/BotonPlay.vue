<template>
  <div class="play-container">
    <button @click="botonPlay">PLAY</button>
    <BarraCancion ref="barraComp" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePreguntasStore } from '@/stores/preguntasStore'
import { Howl } from 'howler'
import BarraCancion from './BarraCancion.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const preguntasStore = usePreguntasStore()
const cancionActual = ref(null)
const barraComp = ref(null)

async function cargarCanciones() {
  // Si el índice llega a 10 resetea todo
  if (preguntasStore.indice >= 10) {
    preguntasStore.indice = 0
    preguntasStore.canciones = []
    userStore.puntuacionTotal = 0
    userStore.preguntasCorrectas = 0
  }
  if (preguntasStore.canciones.length > 0) return

  const response = await fetch('/data/preguntas.json')
  const data = await response.json()
  preguntasStore.canciones = [...data].sort(() => Math.random() - 0.5)
}

function asignarCancionActual(indice) {
  const cancion = preguntasStore.canciones[indice]
  if (!cancion) return

  const sonido = new Howl({
    src: [cancion.file],
    html5: true,
    onload: () => {
      const duracion = sonido.duration()

      if (!cancion.inicioAleatorio) {
        cancion.inicioAleatorio = Math.random() * Math.max(0, duracion - 5)
      }

      sonido.seek(cancion.inicioAleatorio)
      sonido.play()

      barraComp.value.iniciarBarra(5)

      setTimeout(() => {
        sonido.stop()
        preguntasStore.sonando = false
        cancionActual.value = null
      }, 5000)
    },
  })

  cancionActual.value = sonido
  preguntasStore.sonando = true
}

async function botonPlay() {
  await cargarCanciones()
  if (!cancionActual.value) {
    asignarCancionActual(preguntasStore.indice)
  }
}
</script>

<style scoped>
.play-container {
  margin: 35px 0;
}

.play-container button {
  padding: 14px 50px;
  background: linear-gradient(135deg, #7c5cfc, #9370ff);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 6px 25px rgba(124, 92, 252, 0.5);
  margin-bottom: 25px;
}

.play-container button:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 35px rgba(124, 92, 252, 0.7);
}
</style>
