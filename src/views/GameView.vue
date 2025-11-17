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
import TarjetaPregunta from '@/components/GameComponents/TarjetaPregunta.vue'

import { ref } from 'vue'

let mostrarSaludo = ref(true)
let mostrarPregunta = ref(false)
function comenzarJuego() {
  mostrarSaludo.value = false
  mostrarPregunta.value = true
}
</script>
