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
  font-size: 1.3rem;
  color: #c8c4dd;
  margin-bottom: 15px;
  font-weight: 600;
  background: rgba(124, 92, 252, 0.15);
  padding: 12px 24px;
  border-radius: 10px;
  display: inline-block;
}
</style>
