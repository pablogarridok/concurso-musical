<template>
  <div id="descripcion">
    <p><strong>¡Adivina la Canción!</strong></p>
    <p>Escucha fragmentos de 5 segundos aleatorios y averigua a qué canción pertenecen.</p>
  </div>

  <div id="reglas">
    <ul>
      <li><strong>Escucha el fragmento de la canción</strong></li>
      <li><strong>Elige la respuesta correcta entre 4 opciones</strong></li>
      <li><strong>Gana 10 puntos por cada respuesta correcta</strong></li>
      <li><strong>Cuélate en el ranking mundial !!</strong></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* --- Descripción --- */
#descripcion p:first-child {
  font-size: 1.8rem;
  font-weight: 700;
  color: #a996e4;
  margin-bottom: 10px;
}

#descripcion p:last-child {
  font-size: 1.1rem;
  color: #d3cdee;
  margin-bottom: 25px;
}

/* --- Lista de reglas --- */
#reglas {
  margin-bottom: 25px;
}

#reglas ul {
  list-style: disc;
  margin: 0;
  padding-left: 25px;
  color: #e4defd;
}

#reglas li {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 1.05rem;
}
</style>
