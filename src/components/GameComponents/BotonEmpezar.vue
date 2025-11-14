<template>
  <div id="empezar">
    <button id="btn-empezar" @click="$emit('comenzarJuego')">EMPEZAR!</button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['comenzarJuego'])
</script>

<style scoped></style>
