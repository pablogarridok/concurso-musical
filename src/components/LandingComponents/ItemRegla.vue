<template>
  <li class="regla">
    {{ texto }}
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  texto: string
}>()
</script>

<style scoped>
.regla {
  background: linear-gradient(135deg, #27233d, #7c5cfc);
  border-radius: 18px;
  padding: 26px 30px;
  width: 260px;
  box-sizing: border-box;
  max-width: 100%;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 500;
  box-shadow: 0 0 30px rgba(124, 92, 252, 0.35);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.regla:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 0 45px rgba(124, 92, 252, 0.55);
}
</style>
