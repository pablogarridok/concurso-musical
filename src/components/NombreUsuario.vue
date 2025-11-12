<template>
  <section class="userNameCard">
    <div class="card">
      <div id="descripcion">
        <p><strong>¡Adivina la Canción!</strong></p>
        <p>Escucha fragmentos de 5 segundos aleatorios y averigua a qué canción pertenecen.</p>
      </div>

      <div id="reglas">
        <ul>
          <li><strong>Escucha el fragmento de la canción</strong></li>
          <li><strong>Elige la respuesta correcta entre 4 opciones</strong></li>
          <li><strong>Gana 10 puntos por cada respuesta correcta</strong></li>
          <li><strong>Cuélate en el ranking mundial !!</strong></li>
        </ul>
      </div>

      <div id="nombre">
        <label id="label-nombre" for="input-name">Nombre:</label>
        <input
          id="input-name"
          type="text"
          placeholder="Introduce tu nombre"
          v-model="inputNombre"
        />
        <div id="mensaje-error" v-if="mensajeError" :style="{ color: 'red' }">
          {{ mensajeError }}
        </div>
        <button id="boton-nombre" @click="comenzarJuego">Comenzar Juego</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const inputNombre = ref('')
const mensajeError = ref('')

function comenzarJuego() {
  if (inputNombre.value.trim() === '') {
    mensajeError.value = 'Por favor, introduce un nombre.'
  } else {
    mensajeError.value = ''
    console.log(`Comenzando juego para el usuario: ${inputNombre.value}`)
    userStore.setNombre(inputNombre.value.trim())
    router.push('/game')
  }
}
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

/* --- Descripción --- */
#descripcion p:first-child {
  font-size: 1.8rem;
  font-weight: 700;
  color: #a996e4;
  margin-bottom: 10px;
}

#descripcion p:last-child {
  font-size: 1.1rem;
  color: #d3cdee;
  margin-bottom: 25px;
}

/* --- Lista de reglas --- */
#reglas {
  margin-bottom: 25px;
}

#reglas ul {
  list-style: disc;
  margin: 0;
  padding-left: 25px;
  color: #e4defd;
}

#reglas li {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 1.05rem;
}

#nombre {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px;
  align-items: stretch;
}

#label-nombre {
  text-align: left;
  font-size: 1rem;
  color: #d3cdee;
  margin-left: 4px;
}

#nombre input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(124, 92, 252, 0.35);
  background: rgba(20, 18, 34, 0.85);
  color: #ffffff;
  font-size: 1.1rem;
  outline: none;
  transition: 0.3s ease;
}

#nombre input:focus {
  border-color: #a996e4;
  box-shadow: 0 0 12px rgba(124, 92, 252, 0.45);
}

#nombre button {
  align-self: center;
  padding: 10px 30%;
  border: none;
  border-radius: 12px;
  background: #7c5cfc;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
}

#nombre button:hover {
  background: #6a4af4;
  transform: scale(1.06);
}
</style>
