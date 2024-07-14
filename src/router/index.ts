import { createRouter, createWebHistory } from 'vue-router';

import { requiresAuth } from './guards';
import newsRoute from '@/modules/news/route';
const router = createRouter({
  history: createWebHistory(''),
  routes: [
    ...newsRoute,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/exception/NotFound.vue')
    }
  ]
});

router.beforeEach(requiresAuth);

export default router;
