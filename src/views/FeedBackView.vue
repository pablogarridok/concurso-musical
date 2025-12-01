<template>
  <div>
    <FeedBackContent/>
  </div>
</template>

<script setup lang="ts">
import FeedBackContent from '../components/FeedBackComponents/FeedBackContent.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const router = useRouter()
const userStore = useUserStore()

if (userStore.nombre.trim() === ""){
  router.push("/name")
}



</script>

<style scoped>

</style>
