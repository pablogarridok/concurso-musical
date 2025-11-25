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
  text-align: left;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent);
  padding-left: 12px;
  margin-bottom: 15px;
}

.main-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(6px);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

h3 {
  color: var(--color-text);
  font-size: 1.35rem;
  font-weight: 600;
  margin: 15px 0;
  text-align: center;
}

.main-section button {
  padding: 14px 30px;
  font-size: 1.15rem;
  border-radius: 14px;
  background: var(--color-accent);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.main-section button:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.2);
}

#opciones {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

#opciones label {
  padding: 14px 20px;
  border-radius: 14px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

#opciones label:hover {
  background: rgba(255,255,255,0.12);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

#opciones label.correcta {
  border-color: var(--color-correct);
  background: rgba(2,175,2,0.25);
  color: var(--color-correct);
  font-weight: 600;
}

#opciones label.incorrecta {
  border-color: var(--color-wrong);
  background: rgba(255,0,0,0.25);
  color: var(--color-wrong);
  font-weight: 600;
}


</style>
