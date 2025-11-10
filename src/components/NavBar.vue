<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Jugar</a></li>
      <li><a href="#">Ranking</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  background: #4c4fff;
  padding: 12px 20px;
}

.navbar ul {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
