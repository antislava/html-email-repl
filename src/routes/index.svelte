<script>
	import { browser } from "$app/env";

	import type monaco from "monaco-editor/esm/vs/editor/editor.api.js";
	let options: monaco.editor.IStandaloneEditorConstructionOptions = {
		theme: "vs-dark",
		language: "html",
		// fontSize: 16,
		// fontWeight: "500",
		// formatOnType: true,
		// formatOnPaste: true,
		// highlightActiveIndentGuide: true,
		// lineNumbersMinChars: 2,
		// showFoldingControls: "always",
		// tabCompletion: "on",
		scrollBeyondLastLine: false,
		autoClosingBrackets: "languageDefined",
		autoClosingQuotes: "beforeWhitespace",
		autoIndent: "full",
		autoSurround: "languageDefined",
		automaticLayout: true,
		minimap: {
			enabled: false,
		},
		wrappingIndent: "same",
	};

	import markup from "$lib/html/livingdictionaries";
	let value = markup;
	let html = value;
	import SplitPane from "$lib/SplitPane.svelte";
	import HTMLPreview from "$lib/HTMLPreview.svelte";
</script>

<div class="w-screen h-screen flex flex-col">
	<div class="p-2 border-b border-gray-500 header bg-black text-white">
		<h1 class="text-lg font-bold">HTML Email Editor</h1>
	</div>

	<div class="flex-grow">
		<SplitPane>
			<section class="w-full h-full" slot="a">
				{#if browser}
					{#await import("$lib/MonacoEditor.svelte") then { default: MonacoEditor }}
						<MonacoEditor
							{value}
							{options}
							on:update={(e) => (html = e.detail.value)}
						/>
					{/await}
				{/if}
			</section>

			<section slot="b" class="relative h-full">
				<HTMLPreview {html} />
			</section>
		</SplitPane>
	</div>
</div>
