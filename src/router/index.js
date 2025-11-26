import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingView.vue'
import NamePage from '../views/NameView.vue'
import GamePage from '../views/GameView.vue'
import RankingPage from '../views/RankingView.vue'
import FeedBackPage from '../views/FeedBackView.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/name', component: NamePage },
  { path: '/game', component: GamePage },
  { path: '/ranking', component:RankingPage},
  { path: '/feedback', component:FeedBackPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
