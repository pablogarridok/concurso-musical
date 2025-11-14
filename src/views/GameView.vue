<template>
  <div id="saludo" v-if="mostrarSaludo">
    <SaludoComponent />
    <BotonEmpezar @comenzarJuego="comenzarJuego" />
  </div>
</template>

<script setup>
import SaludoComponent from '../components/GameComponents/SaludoComponent.vue'
import BotonEmpezar from '../components/GameComponents/BotonEmpezar.vue'
import { ref } from 'vue'

let mostrarSaludo = ref(true)
function comenzarJuego() {
  mostrarSaludo.value = false
}
</script>
