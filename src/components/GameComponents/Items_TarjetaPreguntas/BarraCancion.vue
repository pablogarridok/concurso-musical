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

// --- función para iniciar la barra ---
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
  gap: 10px;
  width: 100%;
  margin-top: 15px;
}

.tiempo {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-light);
  width: 38px;
  text-align: center;
  flex-shrink: 0;
}

.barra {
  flex: 1;
  -webkit-appearance: none;
  height: 10px;
  border-radius: 8px;
  background: rgba(255,255,255,0.2);
}

.barra::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid white;
}


</style>
