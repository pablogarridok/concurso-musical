<template>
  <div id="bienvenida">
    <h2>Ranking Mundial</h2>
    <p>¡¡Los mejores 5 jugadores de la historia!!</p>
  </div>

  <div id="noPuntuaciones" v-if="noPuntuacionDiv">
    <p>Aun no hay puntuaciones</p>
  </div>

  <div id="ranking" v-if="rankingDiv">
    <RankingComponent />
    <!--  <button @click="borrarRanking">Borrar Ranking</button>  -->


  </div>
</template>

<script setup lang="ts">
import RankingComponent from '@/components/RankingComponents/RankingComponent.vue';
import { ref, onMounted } from 'vue';

const noPuntuacionDiv = ref(true);
const rankingDiv = ref(false);

onMounted(() => {
  const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");

  if (ranking.length === 0) {
    noPuntuacionDiv.value = true;
    rankingDiv.value = false;
  } else {
    noPuntuacionDiv.value = false;
    rankingDiv.value = true;
  }
});
function borrarRanking() {
  localStorage.removeItem("ranking");
  location.reload(); // refresca la página para actualizar la vista
}
</script>

<style scoped>
#bienvenida {
  padding: 60px 20px 40px;
  text-align: center;
  animation: fadeIn 0.9s ease forwards;
  opacity: 0;
}

#bienvenida h2 {
  font-size: 2.8rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 700;
}

#bienvenida p {
  font-size: 1.2rem;
  color: #c8c4dd;
  font-weight: 500;
}

#noPuntuaciones {
  max-width: 500px;
  margin: 80px auto;
  padding: 50px;
  background: rgba(34, 30, 55, 0.85);
  border-radius: 20px;
  border: 1px solid rgba(124, 92, 252, 0.35);
  box-shadow: 0 0 45px rgba(124, 92, 252, 0.25);
  text-align: center;
  animation: floatUp 0.9s ease forwards;
  opacity: 0;
}

#noPuntuaciones p {
  font-size: 1.5rem;
  color: #d3cdee;
  font-weight: 600;
}

#ranking {
  max-width: 700px;
  margin: 40px auto;
  padding: 40px;
  background: rgba(34, 30, 55, 0.9);
  border-radius: 24px;
  border: 1px solid rgba(124, 92, 252, 0.4);
  box-shadow: 0 0 50px rgba(124, 92, 252, 0.3);
  backdrop-filter: blur(15px);
  animation: floatUp 0.9s ease forwards;
  opacity: 0;
}

#ranking button {
  padding: 14px 32px;
  background: #ef4444;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
  display: block;
  margin: 0 auto;
}

#ranking button:hover {
  background: #dc2626;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.5);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  #bienvenida h2 {
    font-size: 2.2rem;
  }

  #ranking {
    padding: 25px 15px;
  }
}
</style>
