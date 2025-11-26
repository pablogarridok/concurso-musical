<template>
  <div id="empezar">
    <button id="btn-empezar" @click="$emit('comenzarJuego')">EMPEZAR!</button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['comenzarJuego'])
</script>

<style scoped>
#empezar {
  margin-top: 55px;
  text-align: center;
}

/* Botón estilo pro */
#btn-empezar {
  padding: 18px 55px;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 2px;

  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
  color: white;

  border: none;
  border-radius: 14px;

  cursor: pointer;
  transition: 0.25s ease-out;

  box-shadow: 0 6px 20px rgba(0,0,0,0.25);

  text-transform: uppercase;

  animation: fadeIn 0.7s ease-out, pulse 2.5s infinite ease-in-out;
}

/* Hover */
#btn-empezar:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

/* Click */
#btn-empezar:active {
  transform: scale(0.97);
}

</style>
