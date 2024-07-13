import { createRouter, createWebHistory } from 'vue-router'

import { VUE_BASE_PATH } from '@/constants'
import { requiresAuth } from './guards'
import newsRoute from '@/modules/news/route'
const router = createRouter({
  history: createWebHistory(VUE_BASE_PATH),
  routes: [
    ...newsRoute,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/exception/NotFound.vue')
    }
  ]
})

router.beforeEach(requiresAuth)

export default router
