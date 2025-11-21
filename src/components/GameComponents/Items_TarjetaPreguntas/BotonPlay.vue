<template>
  <div>
    <button @click="cargarCanciones">PLAY</button>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { usePreguntasStore } from '@/stores/preguntasStore'
import { Howl } from 'howler'

const userStore = useUserStore()
const preguntasStore = usePreguntasStore()

interface Cancion {
  nombre: string
  url: string
}

const canciones = ref<Cancion[]>([])
const cancionActual = ref<Howl | null>(null)

const mensaje = ref('')
const puntuacion = userStore.puntuacionTotal

async function cargarCanciones() {
  try {
    const response = await fetch('../../data/preguntas.json')

    if (!response.ok) {
      mensaje.value = 'No se han cargado'
      throw new Error('No se han podido cargar las canciones')
    }

    const data = await response.json()
    canciones.value = data.canciones
    mensaje.value = 'Canciones cargadas'
  } catch (err) {
    console.error(err)
  }
}

// function asignarCancionActual() {
//   const cancion = canciones.value[preguntasStore.indice.value]
//   cancionActual.value = new Howl({
//     src: [cancion.file],
//     html5: true,
//     onend: () => {
//       preguntasStore.indice.value++
//     },
//   })
// }

// async function botonPlay() {
//   if (canciones.value.length === 0) await cargarCanciones()

//   if (!cancionActual.value) asignarCancionActual()

//   cancionActual.value?.play()
// }


</script>

<style scoped></style>
