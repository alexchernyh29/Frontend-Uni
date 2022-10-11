import { createRouter, createWebHashHistory } from 'vue-router'

import _MainPage from '@/views/_MainPage.vue'
import HomePage from '@/views/HomePage.vue'
import AuthPage from '@/views/AuthPage.vue'
import EventsPage from '@/views/EventsPage.vue'
import StatisticsPage from '@/views/StatisticsPage.vue'
import ShopPage from '@/views/ShopPage.vue'
import TasksPage from '@/views/TasksPage.vue'
import CompetitionsPage from '@/views/CompetitionsPage.vue'
import PersonPage from '@/views/PersonPage.vue'
import PersonaAreaPage from '@/views/PersonaAreaPage.vue'

const routes = [
  { path: '/auth', component: AuthPage, meta: { alias: 'auth' } },
  {
    path: '/',
    component: _MainPage,
    children: [
      { path: '/', component: HomePage, meta: { alias: 'home' } },
      { path: '/personalarea', component: PersonaAreaPage, meta: { alias: 'personalarea' } },
      { path: '/events', component: EventsPage, meta: { alias: 'events' } },
      { path: '/statistics', component: StatisticsPage, meta: { alias: 'statistics' } },
      { path: '/shop', component: ShopPage, meta: { alias: 'shop' } },
      { path: '/tasks', component: TasksPage, meta: { alias: 'tasks' } },
      { path: '/competitions', component: CompetitionsPage, meta: { alias: 'competitions' } },
      { path: '/person', component: PersonPage, meta: { alias: 'person' } },
      { path: '/:pathMatch(.*)*', component: HomePage, meta: { alias: 'home' } },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/auth' && !localStorage.getItem('token')) router.push('/auth')
  next()
})

export default router
