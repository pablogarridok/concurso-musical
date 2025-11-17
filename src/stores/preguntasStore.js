import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreguntasStore = defineStore('pregunta', () => {
  const indice = ref(0)

  function incrementarIndice() {
    indice.value++
  }
  function resetIndice() {
    indice.value = 0
  }
  return { indice, incrementarIndice, resetIndice }
})
