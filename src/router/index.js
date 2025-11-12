import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import NamePage from '../views/NamePage.vue'
import GamePage from '../views/GamePage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/name', component: NamePage },
  { path: '/game', component: GamePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
