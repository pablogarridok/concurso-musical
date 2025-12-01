<template>
  <div class="ranking-container">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Jugador</th>
          <th>Puntuación</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(player, index) in ranking" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ player.nombre }}</td>
          <td>{{ player.puntuacion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const ranking = ref([]);

onMounted(() => {
  ranking.value = JSON.parse(localStorage.getItem("ranking") || "[]");
});
</script>

<style scoped>
.ranking-container {
  overflow-x: auto;
}

.ranking-container table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.ranking-container thead {
  background: rgba(124, 92, 252, 0.2);
}

.ranking-container th {
  padding: 18px;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: left;
  border-bottom: 2px solid rgba(124, 92, 252, 0.5);
}

.ranking-container td {
  padding: 16px 18px;
  color: #d3cdee;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(124, 92, 252, 0.15);
}

.ranking-container tbody tr {
  transition: 0.25s ease;
}


.ranking-container td:first-child {
  color: #7c5cfc;
  font-weight: 700;
  font-size: 1.3rem;
}


</style>
