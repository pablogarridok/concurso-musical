<template>
  <div>
    <button @click="botonPlay">PLAY</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { usePreguntasStore } from '@/stores/preguntasStore'
import { Howl } from 'howler'

const userStore = useUserStore()
const preguntasStore = usePreguntasStore()

const canciones = ref<any[]>([])
const cancionActual = ref<Howl | null>(null)

async function cargarCanciones() {
  const response = await fetch('canciones.json')
  if (!response.ok) throw new Error('No se han podido cargar las canciones')
  const data = await response.json()
  canciones.value = data.canciones
}

function asignarCancionActual() {
  const cancion = canciones.value[preguntasStore.indice.value]
  cancionActual.value = new Howl({
    src: [cancion.file],
    html5: true,
    onend: () => {
      preguntasStore.indice.value++
    },
  })
}

async function botonPlay() {
  if (canciones.value.length === 0) await cargarCanciones()

  if (!cancionActual.value) asignarCancionActual()

  cancionActual.value?.play()
}
</script>

<style scoped></style>
