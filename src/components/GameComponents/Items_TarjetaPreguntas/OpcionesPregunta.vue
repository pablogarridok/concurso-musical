<template>
  <div v-if="respuestasActuales.length > 0" id="opciones">
    <label v-for="(r, index) in respuestasActuales" :key="index">
      <input type="radio" :value="r" name="respuesta" v-model="respuestaSeleccionada" />
      {{ r }}
    </label>
  </div>

  <div id="btn-comprobar">
    <button @click="comprobarRespuesta">Comprobar</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePreguntasStore } from '../../../stores/preguntasStore'

const preguntasStore = usePreguntasStore()

const respuestasActuales = ref([])
const respuestaSeleccionada = ref(null)

// --- cargar respuestas cuando cambie la canción actual ---
function actualizarRespuestas() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]
  respuestasActuales.value = cancion?.respuestas || []
  respuestaSeleccionada.value = null // limpiar selección
}

watch(() => [preguntasStore.canciones, preguntasStore.indice], actualizarRespuestas, {
  immediate: true,
})

// --- comprobar respuesta ---
function comprobarRespuesta() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]

  if (!respuestaSeleccionada.value) {
    alert('Selecciona una respuesta 😅')
    return
  }

  if (respuestaSeleccionada.value === cancion.correcta) {
    alert('✔ ¡Correcto!')
  } else {
    alert('❌ Incorrecto')
  }
}
</script>

<style scoped></style>
