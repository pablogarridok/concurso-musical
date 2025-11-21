<template>
  <div id="puntuacion">
    <puntuacionJugador />
  </div>
  <div>
    <numPreguntas />
    <barraCancion />
    <h3>Qué canción és?</h3>
    <BotonPlay />
    <OpcionesPregunta />
  </div>
</template>

<script setup lang="ts">
import puntuacionJugador from './Items_TarjetaPreguntas/PutuacionJugador.vue'
import numPreguntas from './Items_TarjetaPreguntas/numPreguntas.vue'
import barraCancion from './Items_TarjetaPreguntas/BarraCancion.vue'
import BotonPlay from './Items_TarjetaPreguntas/BotonPlay.vue'
import OpcionesPregunta from './Items_TarjetaPreguntas/OpcionesPregunta.vue'
</script>

<style scoped></style>
