<template>
  <div id="saludo" v-if="mostrarSaludo">
    <p>Hola {{ userStore.nombre }}, pongamos a prueba tus conociminentos musicales!!</p>
    <button id="btn-empezar" @click="comenzarJuego">EMPEZAR!</button>
  </div>
  <div id="tarjeta-pregunta" v-if="pregunta">
    <h2>pregunta {{ indice+1}}</h2>
    <h4>
      A que cancion pertenece este fragmento?
    </h4>
    <div id="opciones"></div>
  </div>
  <div v-if="mostrarFelicidades">
    <p>Felicidades {{ userStore.nombre }}, has completado el concurso</p>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router= useRouter();
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
import { ref } from 'vue'

let nombre=userStore.nombre;
//======SI NO HAY NOMBRE REDIRIJE A LA VISTA DE NOMBRE======
if (nombre.trim()===""){
  router.push('/name')
}

let mostrarSaludo= ref(true);
let divPregunta=ref('');
let preguntas = [];
let indice=ref(0);
//let numRonda=0;

let pregunta =ref(false);

let mostrarFelicidades=ref(false);

async function comenzarJuego(){
  mostrarSaludo.value=false;
  await cargarPreguntas();
  mostrarPreguntas();
}


//================CARGAR PREGUNTAS OREDEN ALEATORIO================
const cargarPreguntas= async ()=>{
    let response =await fetch('/data/preguntas.json')
    if (!response.ok){
        throw new Error("No se han podido cargar las preguntas");
    }
    else{
        preguntas=await response.json();
        preguntas=[...preguntas].sort(()=>Math.random() -0.5);
    }
}


function mostrarPreguntas(){
  if (indice.value>=10){
    mostrarFelicidades.value=true;
  }
  else{
    //const preguntaActual=preguntas[indice.value];
    pregunta.value=true;

   // let respuestas = [...preguntaActual.respuestas].sort(() => Math.random() - 0.5); //ordena las respuestas de fomr aleatoria

    //respuestas.forEach((respuesta, i) => {
    //        let label = document.createElement('label');
    //        label.innerHTML = `<input type="radio" name="${respuesta}" value="${respuesta}"> ${respuesta}`;
//
    //        pregunta.appendChild(label)
    //        pregunta.appendChild(document.createElement('br'));
    //    });
  }
}



</script>

<style scoped></style>
