import App from './App.svelte';

const app = new App({
	target: document.getElementById('house_customizer'),
	props: {
		name: 'world'
	}
});

export default app;
