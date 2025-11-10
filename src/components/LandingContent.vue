<template>
  <section class="landing">
    <div id="hero">
      <h1>¿Cuánto sabes de música?</h1>

      <p class="description">
        ¿Crees que tienes conocimientos de sobra sobre la semicorchea, la semidifusa y la clave de
        sol? ¡Ponte a prueba con este concurso! Escucharás fragmentos aleatorios de
        <strong>5 segundos</strong> y tendrás que adivinar a qué canción pertenecen.
      </p>

      <div id="buttons">
        <button class="btn-play">¡Jugar!</button>
        <button class="btn-ranking">Ver Ranking</button>
      </div>
    </div>
    <div id="reglas">
      <h2>Reglas del juego</h2>
      <ul>
        <li>Escucharás fragmentos de 5 segundos de diferentes canciones.</li>
        <li>Tendrás que elegir la canción correcta entre varias opciones.</li>
        <li>Gana 10 puntos por pregunta acertada y sube posiciones en el ranking</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.landing {
  padding: 60px 20px;
  text-align: center;
  max-width: 700px;
  margin: auto;
}

h1 {
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: #333;
}

.description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;
}

.btn-play {
  background: #0a0efc;
  color: white;
  border: none;
  margin-right: 4px;
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  transition: 0.25s ease;
}
.btn-ranking {
  background: #9c9dd1;
  color: white;
  border: none;
  margin-left: 4px;
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  transition: 0.25s ease;
}

.btn-play:hover {
  background: #393bff;
  transform: translateY(-2px);
}
.btn-ranking:hover {
  background: #565688;
  transform: translateY(-2px);
}
#reglas {
  text-align: center;
  margin-top: 60px;
  padding: 20px;
}

#reglas h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 35px;
  color: #1d1e22;
}

#reglas ul {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Tarjetas Modernas */
#reglas li {
  background: linear-gradient(135deg, #4c4fff, #2a2aff);
  border-radius: 16px;
  padding: 24px 28px;
  width: 260px;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

#reglas li:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
}
</style>
