<template>
  <div>
    <h3>Pregunta {{ numPregunta }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePreguntasStore } from '../../../stores/preguntasStore'
import { watch } from 'vue'
const preguntasStore = usePreguntasStore()
let numPregunta = ref(preguntasStore.indice + 1)
watch(() => preguntasStore.indice, (nuevo) => {
  numPregunta.value = nuevo + 1
})
</script>

<style scoped>
h3 {
  color: var(--color-text);
}
</style>
