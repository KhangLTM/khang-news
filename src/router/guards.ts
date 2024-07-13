import { AppRoute } from '@/constants'
import { getAccessToken } from '@/services'
import type { RouteLocationNormalized } from 'vue-router'

export function requiresAuth(to: RouteLocationNormalized) {
  if (to.meta.requiresAuth) {
    if (!getAccessToken()) {
      return { name: AppRoute.Login.name, query: { redirect: to.fullPath } }
    }
  }
}
