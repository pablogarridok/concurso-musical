<template>
  <div id="feedback">

    <div class="icon-section">
      <div class="circle-icon">
        <p>{{icono}}</p>
      </div>
    </div>

    <h2 class="titulo">{{ mensaje }}</h2>

    <div class="card-puntuacion">
      <p class="puntuacion-title">Puntuación Final</p>

      <h1 class="puntuacion-num">{{ puntos }}</h1>
      <p class="puntuacion-sub">de 100 puntos posibles</p>
    </div>

    <div class="metrics">
      <div class="metric-card correctas">
        <p>Correctas</p>
        <h3>{{ preguntasCorrectas }}</h3>
      </div>

      <div class="metric-card precision">
        <p>Precisión</p>
        <h3>{{ precision }}%</h3>
      </div>
    </div>

    <div class="footer-info">
      Respondiste correctamente <b>{{ preguntasCorrectas }}</b> de <b>10</b> preguntas
    </div>

  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '../../stores/userStore'
import { ref } from 'vue'

const userStore = useUserStore()
let mensaje = ref('')
let icono =ref('')
const puntos = userStore.puntuacionTotal

if (puntos < 40) {
  mensaje.value = "Admitelo, eres pésimo en esto, dedícate a otra cosa"
  icono.value = "😭"
}
else if (puntos < 70) {
  mensaje.value = "Bueno... podría haber sido peor"
  icono.value="😑​"
}
else {
  mensaje.value = "¡Excelente, sabes mucho sobre esto fiera!"
  icono.value="​😁​"
}

const preguntasCorrectas= userStore.preguntasCorrectas
const precision=userStore.preguntasCorrectas*10;

</script>

<style scoped>
/* ===== CONTENEDOR GENERAL ===== */
#feedback {
  width: 95%;
  max-width: 450px;
  margin: 50px auto;
  padding: 25px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
}

/* ===== ICONO SUPERIOR ===== */
.icon-section {
  margin-bottom: 20px;
}

.circle-icon {
  width: 70px;
  height: 70px;
  background: #d7f3d1;
  color: #19a648;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  margin: 0 auto;
}

/* ===== TEXTOS PRINCIPALES ===== */
.titulo {
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 10px;
}

.subtitulo {
  color: #666;
  font-size: 1rem;
  margin-bottom: 30px;
}

/* ===== TARJETA PUNTUACIÓN ===== */
.card-puntuacion {
  background: linear-gradient(135deg, #f8f4ff, #fff0ff);
  padding: 25px;
  border-radius: 20px;
  margin-bottom: 25px;
}

.puntuacion-title {
  font-size: 1rem;
  color: #666;
}

.puntuacion-num {
  font-size: 3.2rem;
  margin: 10px 0;
  color: #b04de8;
  font-weight: 700;
}

.puntuacion-sub {
  color: #888;
  font-size: 0.9rem;
}

/* ===== METRICS (Correctas / Precisión) ===== */
.metrics {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.metric-card {
  flex: 1;
  padding: 18px 10px;
  border-radius: 15px;
  background: #f7f7f7;
  border: 1px solid #eee;
}

.metric-card p {
  font-size: 0.9rem;
  color: #666;
}

.metric-card h3 {
  font-size: 1.6rem;
  margin-top: 8px;
}

/* Colores como en la imagen */
.correctas h3 {
  color: #15803d; /* verde */
}

.precision h3 {
  color: #e58a00; /* naranja */
}

/* ===== FOOTER INFO ===== */
.footer-info {
  margin-top: 25px;
  background: #f3f3f3;
  padding: 12px;
  border-radius: 12px;
  font-size: 0.95rem;
   color: #444343;
}

</style>
