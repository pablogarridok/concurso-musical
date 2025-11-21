<template>
  <div>
    <button @click="botonPlay">PLAY</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePreguntasStore } from '@/stores/preguntasStore'
import { Howl } from 'howler'

const preguntasStore = usePreguntasStore()
const cancionActual = ref(null)

async function cargarCanciones() {
  try {
    const response = await fetch('/data/preguntas.json')
    const data = await response.json()

    console.log('JSON cargado:', data)

    // Guardamos las canciones en el store
    preguntasStore.canciones = data

    // Mezclar las canciones aleatoriamente
    preguntasStore.canciones = [...preguntasStore.canciones].sort(() => Math.random() - 0.5)
  } catch (err) {
    console.error(err)
  }
}

function asignarCancionActual(indice) {
  const cancion = preguntasStore.canciones[indice]
  console.log('Asignando canción:', cancion)

  if (!cancion) {
    console.error('No existe canción en ese índice:', indice)
    return
  }

  cancionActual.value = new Howl({
    src: [cancion.file],
    html5: true,
    onend: () => {
      preguntasStore.indice++
    },
  })
}

async function botonPlay() {
  // Cargar canciones si no hay
  if (preguntasStore.canciones.length === 0) {
    await cargarCanciones()
  }

  // Reproducir la canción actual
  if (!cancionActual.value) {
    asignarCancionActual(preguntasStore.indice)
    cancionActual.value?.play()
  }
}
</script>

<style scoped></style>
