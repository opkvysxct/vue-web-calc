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
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		}
	]
})

export default router
