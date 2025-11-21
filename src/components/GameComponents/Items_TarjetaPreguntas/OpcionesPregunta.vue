<template>
  <div v-if="respuestasActuales.length > 0" id="opciones">
    <label v-for="(r, index) in respuestasActuales" :key="index">
      <input type="radio" :value="r" name="respuesta" />
      {{ r }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePreguntasStore } from '../../../stores/preguntasStore'

const preguntasStore = usePreguntasStore()
const respuestasActuales = ref([])

// Función para actualizar las respuestas de la canción actual
function actualizarRespuestas() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]
  respuestasActuales.value = cancion?.respuestas || []
}

// Observar cambios en canciones o índice
watch(
  () => [preguntasStore.canciones, preguntasStore.indice],
  () => {
    actualizarRespuestas()
  },
  { immediate: true }, // para ejecutar al montar el componente
)
</script>

<style scoped></style>
