import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/vue-web-calc/',
			name: 'home',
			component: () => import('../views/CalculatorView.vue')
		},
		{
			path: '/vue-web-calc/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
