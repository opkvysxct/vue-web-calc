<script setup lang="ts">

</script>

<template>
	<div>
		<h1>About</h1>
		<ul>
			<li>
				<h2>Why does this site even exists?</h2>
			</li>
			<p>Anwser: only as a portfolio.</p>
			<li>
				<h2>What technologies does this site uses?</h2>
			</li>
			<p>Anwser: it uses Vue as a framework, SCSS for styles and routers for pages.</p>
			<li>
				<h2>Is it open source?</h2>
			</li>
			<p>Anwser: yes, it is, <a href="https://github.com/opkvysxct/vue-web-calc">repository link.</a></p>
			<li>
				<h2>Something more?</h2>
			</li>
			<p>Anwser: i guess not</p>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
h1 {
	margin-top: 5vh;
	font-size: 3rem;
	font-weight: 700;
}

h2 {
	font-size: 1.75rem;
	margin-top: 1.5rem;
}

p,
a {
	font-size: 1rem;
}

ul {
	margin: 7.5vh;
	margin-top: 0;
}

div {
	display: flex;
	justify-content: baseline;
	align-items: center;
	flex-direction: column;
	height: auto;
	width: auto;
	max-height: 85vh;
	max-width: 80vw;
	border-radius: 0.75vh;
	background-color: var(--color-primary);
	box-shadow: -0.25vh 0.5vh 1vh rgba(0, 0, 0, 0.25);
}

a {
	text-decoration: unset;
}

@media only screen and ((max-width: 850px) or (max-height: 850px)) {
	div {
		height: auto;
		width: auto;
		max-width: 95vw;
		max-height: 95vh;
	}

	ul {
		margin: 2.5vh;
		margin-top: 0;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.25rem;
	}

	p,
	a {
		font-size: 0.75rem;
	}
}
</style>