<script setup lang="ts">
function test() {
	console.log("Clicked")
}
</script>

<template>
	<div>
		<button @click="test()">
			<font-awesome-icon :icon="['fas', 'moon']" />
		</button>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/theme.scss" as theme;
$--SVGSize: 5vh;

div {
	display: flex;
	align-items: flex-end;
	position: absolute;
	top: 100vh;
	transform: translate(0, -100%);
	transform-origin: center;
}

svg {
	color: theme.$color-text-light;
	transform-origin: center;
	transition: 100ms;
	padding: 0.75vh;
	height: --SVGSize;
	width: --SVGSize;
}

button {
	transition: 100ms;
	margin: 2vh;
	background-color: theme.$color-secondary;
	border: none;
	border-radius: 50%;
	box-shadow: -0.25vh 0.5vh 1vh rgba(0, 0, 0, 0.25);
}

button:hover {
	box-shadow: 0 0 2vh theme.$color-negative-alpha;
}

button:active {
	svg {
		padding: 0.5vh;
	}
}
</style>