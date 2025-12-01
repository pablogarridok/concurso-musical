<template>
  <div id="barra-div">
    <span>{{ tiempo_actual.toFixed(1) }}</span>
    <input type="range" disabled min="0" max="100" v-model="barra_tiempo" />
    <span>5</span>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

const tiempo_actual = ref(0)
const barra_tiempo = ref(0)
let intervalo = null


function iniciarBarra(duracion = 5) {
  tiempo_actual.value = 0
  barra_tiempo.value = 0

  // limpiar intervalos anteriores
  if (intervalo) clearInterval(intervalo)

  const paso = 100 / (duracion * 10) // actualizamos 10 veces por segundo
  intervalo = setInterval(() => {
    tiempo_actual.value += 0.1
    barra_tiempo.value += paso

    if (tiempo_actual.value >= duracion) {
      tiempo_actual.value = duracion
      barra_tiempo.value = 100
      clearInterval(intervalo)
    }
  }, 100)
}

// Exponemos la función para el padre
defineExpose({ iniciarBarra })
</script>

<style scoped>
#barra-div {
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
}

#barra-div span {
  font-size: 1rem;
  color: #c8c4dd;
  font-weight: 600;
  min-width: 40px;
  text-align: center;
}

#barra-div input[type="range"] {
  flex: 1;
  height: 8px;
  border-radius: 10px;
  background: rgba(124, 92, 252, 0.2);
  outline: none;
  appearance: none;
}

#barra-div input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #7c5cfc;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(124, 92, 252, 0.8);
}

#barra-div input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #7c5cfc;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px rgba(124, 92, 252, 0.8);
}
</style>
