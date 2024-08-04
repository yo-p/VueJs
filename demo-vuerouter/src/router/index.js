import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { transition: 'fade' },
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      meta: { transition: 'slide' },
      component: () => import('../views/BlogView.vue'),
      beforeEnter() {
        console.log('before Enter')
      }
    }
  ]
})
router.beforeEach(() => {
  console.log('beforeEach')
})
router.beforeResolve(() => {
  console.log('beforeResolve')
})
router.afterEach(() => {
  console.log('afterEach')
})
export default router
