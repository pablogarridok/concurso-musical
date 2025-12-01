<template>
  <div v-if="respuestasActuales.length > 0" id="opciones">
    <label
      v-for="(r, index) in respuestasActuales"
      :key="index"
      :class="{
        'correcta': respuestaComprobada && r === preguntasStore.canciones[preguntasStore.indice].correcta,
        'incorrecta': respuestaComprobada && r === respuestaSeleccionada && r !== preguntasStore.canciones[preguntasStore.indice].correcta
      }"
    >
      <input
        type="radio"
        :value="r"
        name="respuesta"
        v-model="respuestaSeleccionada"
        :disabled="respuestaComprobada"
      />
      {{ r }}
    </label>
  </div>

  <div id="btn-comprobar">
    <div v-if="mensajeComprobar">
      <p>{{ mensaje }}</p>
    </div>
    <button @click="comprobarRespuesta" :disabled="!respuestaSeleccionada || respuestaComprobada">
      Comprobar
    </button>
  </div>

  <div id="btn-siguiente">
    <button :disabled="!puedeSiguiente" @click="siguientePregunta">SIGUIENTE</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePreguntasStore } from '../../../stores/preguntasStore'
import { useUserStore } from '../../../stores/userStore'
import { useRouter } from 'vue-router'

const preguntasStore = usePreguntasStore()
const userStore = useUserStore()
const router = useRouter()

let respuestasActuales = ref([])
const respuestaSeleccionada = ref(null)
const mensajeComprobar = ref(false)
const mensaje = ref("")
const puedeSiguiente = ref(false)
const respuestaComprobada = ref(false)

// --- cargar respuestas cuando cambie la canción actual ---
function actualizarRespuestas() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]
  if (!cancion) {
    respuestasActuales.value = []
    return
  }

  respuestasActuales.value = [...cancion.respuestas].sort(() => Math.random() - 0.5)
  respuestaSeleccionada.value = null
  mensajeComprobar.value = false
  puedeSiguiente.value = false
  respuestaComprobada.value = false
}

// Observar cambios tanto en el índice como en las canciones
watch(
  () => [preguntasStore.indice, preguntasStore.canciones.length],
  () => {
    if (preguntasStore.canciones.length > 0) {
      actualizarRespuestas()
    }
  },
  { immediate: true }
)

// --- comprobar respuesta ---
function comprobarRespuesta() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]

  respuestaComprobada.value = true

  if (respuestaSeleccionada.value === cancion.correcta) {
    mensajeComprobar.value = true
    mensaje.value = "Respuesta Correcta"
    userStore.actualizarPuntuacion(10)
    userStore.sumarPreguntaCorrecta()
  } else {
    mensajeComprobar.value = true
    mensaje.value = "Respuesta Incorrecta"
    userStore.actualizarPuntuacion(-5)
  }

  puedeSiguiente.value = true
}

function siguientePregunta() {
  if (preguntasStore.indice >= 9) {
    router.push('/feedback')
  }
  preguntasStore.incrementarIndice()
  preguntasStore.sonando = false
}
</script>

<style scoped>
#opciones {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
}

#opciones label {
  padding: 18px 24px;
  background: rgba(45, 42, 65, 0.8);
  border: 2px solid rgba(124, 92, 252, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: 0.25s ease;
  font-size: 1.1rem;
  color: #d3cdee;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
}

#opciones label:hover {
  background: rgba(70, 63, 109, 0.8);
  border-color: rgba(124, 92, 252, 0.6);
}

#opciones label input[type="radio"] {
  width: 20px;
  height: 20px;
  accent-color: #7c5cfc;
  cursor: pointer;
}

#opciones label.correcta {
  background: rgba(34, 197, 94, 0.25);
  border-color: #22c55e;
  color: #86efac;
  font-weight: 700;
}

#opciones label.incorrecta {
  background: rgba(239, 68, 68, 0.25);
  border-color: #ef4444;
  color: #fca5a5;
  font-weight: 700;
}



#btn-comprobar {
  margin-top: 25px;
  text-align: center;
}

#btn-comprobar p {
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 600;
}

#btn-comprobar button {
  padding: 14px 40px;
  background: #7c5cfc;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
}

#btn-comprobar button:hover:not(:disabled) {
  background: #6a4af4;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(124, 92, 252, 0.5);
}

#btn-comprobar button:disabled {
  background: rgba(124, 92, 252, 0.3);
  cursor: not-allowed;
  opacity: 0.5;
}

#btn-siguiente {
  margin-top: 25px;
}

#btn-siguiente button {
  padding: 14px 40px;
  background: #2d2a41;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
}

#btn-siguiente button:hover:not(:disabled) {
  background: #463f6d;

  box-shadow: 0 8px 25px rgba(45, 42, 65, 0.6);
}

#btn-siguiente button:disabled {
  background: rgba(45, 42, 65, 0.4);
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
