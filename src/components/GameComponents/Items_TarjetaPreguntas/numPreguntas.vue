<template>
  <div>
    <h3>Pregunta {{ numPregunta }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePreguntasStore } from '../../../stores/preguntasStore'
const preguntasStore = usePreguntasStore()
let numPregunta = ref(preguntasStore.indice + 1)
</script>

<style scoped></style>
