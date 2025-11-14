<template>
  <div id="reglas">
    <h2>Reglas del juego</h2>
    <ul>
      <ItemRegla texto="Escucharás fragmentos de 5 segundos de diferentes canciones." />
      <ItemRegla texto="Tendrás que elegir la canción correcta entre varias opciones." />
      <ItemRegla texto="Gana 10 puntos por pregunta acertada y sube posiciones en el ranking" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import ItemRegla from './ItemRegla.vue'
</script>

<style scoped>
#reglas {
  margin-top: 70px;
}

#reglas h2 {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: #ffffff;
}

#reglas ul {
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
}
</style>
