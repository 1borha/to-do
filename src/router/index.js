import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'main',
		component: () => import('@/views/BasePage.vue')
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/',
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
