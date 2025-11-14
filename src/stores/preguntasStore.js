import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePreguntasStore = defineStore('pregunta', () => {
  const indice = ref(0)

  function incrementarIndice() {
    indice.value++
  }
  return { indice, incrementarIndice }
})
