<script setup lang="ts">
import { ref } from "vue";
const Data = ref('');
const getData = async () => {
	try {

		// "https://api.github.com/users/softeng";
		const response = await fetch(`http://localhost:3002/hello`);
		const data = await response.text();

		if (response.ok) {
			Data.value = data;
			// error.value = null;
		} else {
			// userProfile.value = null;
			// error.value = `Error: ${data}`;
		}


	} catch (err) {
		console.error('Error fetching data:', err);
		// error.value = 'An error occurred while fetching data.';
	}
};


</script>

<template>
	h1 Using fetch
	<button @click="getData"> fetch </button>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<h2>{{ Data }}</h2>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
