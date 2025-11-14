import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingView.vue'
import NamePage from '../views/NameView.vue'
import GamePage from '../views/GameView.vue'

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
