<template>
  <section class="userNameCard">
    <div class="card">
      <DescripcionComponent />
      <InputNombre />
    </div>
  </section>
</template>

<script setup lang="ts">
import DescripcionComponent from '../components/NombreComponents/DescripcionComponent.vue'
import InputNombre from '../components/NombreComponents/InputNombre.vue'
</script>

<style scoped>
.userNameCard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(145deg, #0f0e17, #7e55dd);
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  padding: 20px;
}

/* --- Carta principal --- */
.card {
  background: rgba(34, 30, 55, 0.85);
  border: 1px solid rgba(124, 92, 252, 0.35);
  border-radius: 20px;
  padding: 25px 45px 40px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 45px rgba(124, 92, 252, 0.25);
  backdrop-filter: blur(12px);
  text-align: left;
}
</style>
