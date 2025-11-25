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

const respuestasActuales = ref([])
const respuestaSeleccionada = ref(null)
const mensajeComprobar = ref(false)
const mensaje = ref("")
const puedeSiguiente = ref(false)
const respuestaComprobada = ref(false)  // ← NUEVO

// --- cargar respuestas cuando cambie la canción actual ---
function actualizarRespuestas() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]
  respuestasActuales.value = cancion?.respuestas || []
  respuestaSeleccionada.value = null
  mensajeComprobar.value = false
  puedeSiguiente.value = false
  respuestaComprobada.value = false  // ← RESETEAR al cambiar pregunta
}

// Observar cambios en el índice
watch(
  () => preguntasStore.indice,
  () => actualizarRespuestas()
)

// Observar cuando se carguen las canciones
watch(
  () => preguntasStore.canciones.length,
  (nuevaLongitud) => {
    if (nuevaLongitud > 0) {
      actualizarRespuestas()
    }
  },
  { immediate: true }
)

// --- comprobar respuesta ---
function comprobarRespuesta() {
  const cancion = preguntasStore.canciones[preguntasStore.indice]



  respuestaComprobada.value = true  // ← MARCAR COMO COMPROBADA

  if (respuestaSeleccionada.value === cancion.correcta) {
    mensajeComprobar.value = true
    mensaje.value = "Respuesta Correcta"
    userStore.actualizarPuntuacion(10);
  } else {
    mensajeComprobar.value = true
    mensaje.value = "Respuesta Incorrecta"
  }

  puedeSiguiente.value = true
}


function siguientePregunta() {
  if (preguntasStore.indice>=9){
    router.push('/')

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
  margin: 25px 0;
}

#opciones label {
  display: flex;
  gap: 12px;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 14px 20px;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

/* Hover elegante */
#opciones label:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Respuesta correcta */
#opciones label.correcta {
  border-color: var(--color-correct);
  background: rgba(2, 175, 2, 0.2);
  color: var(--color-correct);
  font-weight: 600;
}

/* Respuesta incorrecta */
#opciones label.incorrecta {
  border-color: var(--color-wrong);
  background: rgba(255, 0, 0, 0.2);
  color: var(--color-wrong);
  font-weight: 600;
}

/* Input radio estilizado */
#opciones input[type="radio"] {
  accent-color: var(--color-accent);
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.2s;
}

/* Opciones deshabilitadas */
#opciones input[type="radio"]:disabled + span,
#opciones label:has(input:disabled) {
  opacity: 0.6;
  cursor: not-allowed;
}
/* Botón Comprobar */
#btn-comprobar button {
  padding: 12px 28px;
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

#btn-comprobar button:hover:not(:disabled) {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

#btn-comprobar button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
}

#btn-comprobar button:disabled {
  background: #555;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Botón Siguiente */
#btn-siguiente button {
  padding: 12px 28px;
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

#btn-siguiente button:hover:not(:disabled) {
  background: var(--color-accent-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

#btn-siguiente button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
}

#btn-siguiente button:disabled {
  background: #555;
  cursor: not-allowed;
  opacity: 0.7;
}

</style>
