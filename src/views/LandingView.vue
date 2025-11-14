<template>
  <section class="landing">
    <HeroComponent />
    <ReglasComponent />
    <EmpezarComponent />
  </section>
</template>

<script setup lang="ts">
import HeroComponent from '../components/LandingComponents/HeroComponent.vue'
import ReglasComponent from '../components/LandingComponents/ReglasComponent.vue'
import EmpezarComponent from '../components/LandingComponents/EmpezarComponent.vue'
</script>

<style scoped>
.landing {
  padding: 80px 20px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

:global(html, body) {
  overflow-x: hidden; /* bloquea scroll horizontal */
  margin: 0;
  padding: 0;
}

/* Fondo degradado moderno */
:global(body) {
  background: linear-gradient(145deg, #0f0e17, #7e55dd);

  margin: 0;
  padding: 0;
}
</style>
