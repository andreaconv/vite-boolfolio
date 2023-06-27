import { createRouter, createWebHistory } from "vue-router";

import Home     from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Error404 from './pages/Error404.vue'

const router = createRouter({

  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },

    // rotta per 404 da mettere in fondo a tutte le rotte 

    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }

  ]

})

export { router }