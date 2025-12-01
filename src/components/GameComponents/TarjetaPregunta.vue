<template>
  <div id="puntuacion">
  <puntuacionJugador />
</div>

<div class="main-section">

  <numPreguntas />
  <h3>Qué canción és?</h3>
  <BotonPlay />
  <OpcionesPregunta />
</div>

</template>

<script setup lang="ts">
import puntuacionJugador from './Items_TarjetaPreguntas/PutuacionJugador.vue'
import numPreguntas from './Items_TarjetaPreguntas/numPreguntas.vue'
import BotonPlay from './Items_TarjetaPreguntas/BotonPlay.vue'
import OpcionesPregunta from './Items_TarjetaPreguntas/OpcionesPregunta.vue'
</script>

<style scoped>
#puntuacion {
  position: fixed;
  top: 80px;
  right: 20px;
  background: rgba(34, 30, 55, 0.95);
  padding: 20px 30px;
  border-radius: 16px;
  border: 1px solid rgba(124, 92, 252, 0.5);
  box-shadow: 0 4px 20px rgba(124, 92, 252, 0.35);
  z-index: 100;
  backdrop-filter: blur(10px);
}


.main-section {
  max-width: 650px;
  width: 100%;
  margin: 30px auto;
  padding: 40px;
  background: rgba(34, 30, 55, 0.9);
  border-radius: 24px;
  border: 1px solid rgba(124, 92, 252, 0.4);
  box-shadow: 0 0 50px rgba(124, 92, 252, 0.3);
  backdrop-filter: blur(15px);
  animation: floatUp 0.9s ease forwards;
  opacity: 0;
  text-align: center;
}

.main-section h3 {
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 700;
}

@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>
