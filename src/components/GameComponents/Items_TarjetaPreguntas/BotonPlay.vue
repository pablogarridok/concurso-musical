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

const preguntasStore = usePreguntasStore()
const cancionActual = ref(null)
const barraComp = ref(null)

async function cargarCanciones() {
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
      if (!preguntasStore.inicioAleatorio) {
        preguntasStore.inicioAleatorio = Math.random() * (duracion - 5)
      }
      sonido.seek(preguntasStore.inicioAleatorio)
      sonido.play()

      barraComp.value.iniciarBarra(5)

      setTimeout(() => {
        sonido.stop()
        preguntasStore.sonando = false
        cancionActual.value = null
      }, 5000)
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
}

button {
  padding: 14px 30px;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 14px;
  background: var(--color-accent);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

button:hover:not(:disabled) {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

button:disabled {
  background: #555;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
