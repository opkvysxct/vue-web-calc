import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory("/vue-web-calc/"),
	routes: [
		{
			path: '/',
			name: 'calculator',
			component: () => import('../views/CalculatorView.vue')
		},
		{
			path: '/',
			name: 'about',
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
