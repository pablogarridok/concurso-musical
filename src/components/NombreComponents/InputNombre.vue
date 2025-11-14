<template>
  <div id="nombre">
    <label id="label-nombre" for="input-name">Nombre:</label>
    <input id="input-name" type="text" placeholder="Introduce tu nombre" v-model="inputNombre" />
    <div id="mensaje-error" v-if="mensajeError" :style="{ color: 'red' }">
      {{ mensajeError }}
    </div>
    <button id="boton-nombre" @click="comenzarJuego">Comenzar Juego</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/userStore.js'

const router = useRouter()
const userStore = useUserStore()

const inputNombre = ref('')
const mensajeError = ref('')

function comenzarJuego() {
  if (inputNombre.value.trim() === '') {
    mensajeError.value = 'Por favor, introduce un nombre.'
  } else {
    mensajeError.value = ''
    console.log(`Comenzando juego para el usuario: ${inputNombre.value}`)
    userStore.setNombre(inputNombre.value.trim())
    router.push('/game')
  }
}
</script>

<style scoped>
#nombre {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px;
  align-items: stretch;
}

#label-nombre {
  text-align: left;
  font-size: 1rem;
  color: #d3cdee;
  margin-left: 4px;
}

#nombre input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(124, 92, 252, 0.35);
  background: rgba(20, 18, 34, 0.85);
  color: #ffffff;
  font-size: 1.1rem;
  outline: none;
  transition: 0.3s ease;
}

#nombre input:focus {
  border-color: #a996e4;
  box-shadow: 0 0 12px rgba(124, 92, 252, 0.45);
}

#nombre button {
  align-self: center;
  padding: 10px 30%;
  border: none;
  border-radius: 12px;
  background: #7c5cfc;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
}

#nombre button:hover {
  background: #6a4af4;
  transform: scale(1.06);
}
</style>
