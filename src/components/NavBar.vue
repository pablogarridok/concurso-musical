<template>
  <nav class="navbar">
    <ul>
      <li><a href="#" @click="irAInicio">Inicio</a></li>
      <li><a href="#" @click="irAJugar">Jugar</a></li>
      <li><a href="#">Ranking</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const userStore =useUserStore()


  function irAInicio(){
    router.push("/")
  }

  function irAJugar(){
    if (userStore.nombre.trim() === ""){
      router.push("/name")
    }
    else {
      router.push("/game")
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

.navbar {
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  padding: 18px 28px;
  background: rgba(20, 18, 34, 0.65);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(124, 92, 252, 0.25);
  position: sticky;
  top: 0;
  z-index: 999;
  font-family: 'Inter', sans-serif;
}

.navbar ul {
  display: flex;
  justify-content: center;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar a {
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: #e9e9f1;
  transition:
    color 0.2s ease,
    text-shadow 0.3s ease;
}

.navbar a:hover {
  color: #a996e4;
  text-shadow: 0 0 15px rgba(55, 0, 255, 0.6);
}
</style>
