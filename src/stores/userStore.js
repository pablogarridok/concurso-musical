import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const nombre = ref('')

  function setNombre(nuevoNombre) {
    nombre.value = nuevoNombre
  }

  const preguntasCorrectas= ref(0)
  function sumarPreguntaCorrecta() {
    preguntasCorrectas.value += 1
  }

  const puntuacionTotal = ref(0)
  function actualizarPuntuacion(puntos) {
    puntuacionTotal.value += puntos
  }
  return { nombre, setNombre, actualizarPuntuacion, puntuacionTotal, preguntasCorrectas, sumarPreguntaCorrecta }
})
