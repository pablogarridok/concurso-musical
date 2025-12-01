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
  margin-top: 40px;
}

#btn-empezar {
  padding: 16px 40px;
  background: #7c5cfc;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 8px 25px rgba(124, 92, 252, 0.4);
}

#btn-empezar:hover {
  background: #6a4af4;
  transform: translateY(-3px) scale(1.06);
  box-shadow: 0 12px 35px rgba(124, 92, 252, 0.6);
}
</style>
