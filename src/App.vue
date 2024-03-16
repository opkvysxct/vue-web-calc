<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<header>
		<div id="RouterLinks">
			<RouterLink class="Link" :to="{ name: 'calculator' }">Calculator</RouterLink>
			<RouterLink class="Link" :to="{ name: 'about' }">About</RouterLink>
		</div>
	</header>
	<div id="RouterView">
		<RouterView />
	</div>
</template>

<style scoped>
.Link {
	color: var(--color-text-light);
	text-decoration: unset;
	font-size: 1.5rem;
	font-weight: 550;
	margin: 0.5rem;
}

header {
	margin: auto;
	height: 20vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

#RouterLinks {
	background-color: var(--color-primary);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	display: flex;
	border-radius: 0.5vw;
	box-shadow: -0.25vh 0.5vh 1vh rgba(0, 0, 0, 0.25);
	width: 40vh;
}

#RouterView {
	margin: auto;
	height: 80vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
