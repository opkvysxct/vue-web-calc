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

<style lang="scss" scoped>
.Link {
	color: var(--color-text-light);
	text-decoration: unset;
	font-size: 1.5rem;
	font-weight: 550;
	margin: 0.5rem;
}

header {
	margin-top: 5vh;
	display: flex;
	justify-content: center;
}

#RouterLinks {
	background-color: var(--color-primary);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	display: flex;
	border-radius: 0.75vw;
	box-shadow: -0.25vh 0.5vh 1vh rgba(0, 0, 0, 0.25);
	width: 35vh;
}

#RouterView {
	margin: auto;
	height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

@media only screen and ((max-width: 850px) or (max-height: 750px)) {
	header {
		margin-top: 0;
	}

	#RouterLinks {
		margin-top: 0;
		width: 100vw;
		border-radius: 0;

	}
}
</style>
