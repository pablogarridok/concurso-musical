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
  text-align: center;
}

#btn-empezar {
  padding: 16px 40px;
  font-size: 1.4rem;
  background: var(--color-accent);
  border: none;
  border-radius: var(--radius);
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

#btn-empezar:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
}
</style>
