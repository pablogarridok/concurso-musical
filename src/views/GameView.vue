<template>
  <div id="saludo" v-if="mostrarSaludo">
    <SaludoComponent />
    <BotonEmpezar @comenzarJuego="comenzarJuego" />
  </div>
  <div id="tarjeta-pregunta">
    <TarjetaPregunta v-if="mostrarPregunta" />
  </div>
</template>

<script setup lang="ts">
import SaludoComponent from '../components/GameComponents/SaludoComponent.vue'
import BotonEmpezar from '../components/GameComponents/BotonEmpezar.vue'
import TarjetaPregunta from '../components/GameComponents/TarjetaPregunta.vue'

import { ref } from 'vue'

let mostrarSaludo = ref(true)
let mostrarPregunta = ref(false)
function comenzarJuego() {
  mostrarSaludo.value = false
  mostrarPregunta.value = true
}
</script>

<style scoped>
#saludo {
  margin-top: 100px;
  text-align: center;
  animation: fadeIn 0.8s ease;
}

#tarjeta-pregunta {
  max-width: 600px;
  margin: 80px auto 0;
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
