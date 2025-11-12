import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const nombre = ref('')

  function setNombre(nuevoNombre) {
    nombre.value = nuevoNombre
  }
  return { nombre, setNombre }
})
