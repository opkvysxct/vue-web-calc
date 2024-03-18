<script setup lang="ts">
</script>

<template>
	<div>
		<button>
			<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1472 1536">
				<path fill="currentColor"
					d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72z" />
			</svg>
		</button>
	</div>
</template>

<style lang="scss" scoped>
$SVGSize: 6vh;
$NegativeColor: var(--color-negative) + 80;

div {
	display: flex;
	align-items: flex-end;
	position: absolute;
	height: 100vh;
	width: 100vw;
	z-index: -1;
}

button {
	transition: 100ms;
	margin: 2vh;
	background-color: var(--color-secondary);
	border: none;
	border-radius: 50%;
	box-shadow: -0.25vh 0.5vh 1vh rgba(0, 0, 0, 0.25);
}

button:hover {
	box-shadow: 1vh 1vh 5vh $NegativeColor;
}

svg {
	color: var(--color-text-light);
	padding: 0.75vh;
	height: $SVGSize;
	width: $SVGSize;
}
</style>