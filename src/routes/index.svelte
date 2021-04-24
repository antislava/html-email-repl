<script>
	import { browser } from "$app/env";
</script>

<div>
	{#if browser}
		{#await import("$lib/MonacoEditor.svelte") then { default: MonacoEditor }}
			<MonacoEditor />
		{/await}
	{/if}
</div>

<style>
	* :global(.buttons) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		width: 500px;
	}
</style>
