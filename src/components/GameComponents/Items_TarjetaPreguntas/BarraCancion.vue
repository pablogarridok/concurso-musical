<template>
  <div id="barra-div">
    <span>{{ tiempo_actual }}</span>
    <input type="range" disabled min="0" max="100" v-model="barra_tiempo" />
    <span>5</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let tiempo_actual = ref(0)

let barra_tiempo = ref(0)
</script>

<style scoped></style>
