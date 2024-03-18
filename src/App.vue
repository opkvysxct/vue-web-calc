<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeChanger from './components/ThemeChanger.vue'
</script>

<template>
	<ThemeChanger></ThemeChanger>
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
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20vh;
}

#RouterLinks {
	background-color: var(--color-primary);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10vh;
	padding: 2vh 6vh 2vh 6vh;
	border-radius: 0.75vw;
	box-shadow: -0.25vh 0.5vh 1vh rgba(0, 0, 0, 0.25);
}

#RouterView {
	height: 70vh;
	display: flex;
	justify-content: center;
	margin: 2.5vh 0 5vh 0;
}

@media only screen and ((max-width: 850px) or (max-height: 800px)) {
	header {
		margin-top: 0;
		height: auto;
		align-items: baseline;
	}

	#RouterLinks {
		margin-top: 0;
		width: 100vw;
		border-radius: 0;
	}

	#RouterView {
		height: auto;
	}
}
</style>
