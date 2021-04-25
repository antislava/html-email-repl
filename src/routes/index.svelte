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
		// autoClosingBrackets: true,
		autoClosingQuotes: "beforeWhitespace",
		autoIndent: "full",
		autoSurround: "languageDefined",
		automaticLayout: true,
		minimap: {
			enabled: false,
		},
		wrappingIndent: "same",
	};

	let value = "<b>\n\tHello world\n</b>";
	let html = value;
	import SplitPane from "$lib/SplitPane.svelte";
</script>

<div class="w-screen h-screen flex flex-col">
	<div class="p-2 border-b header">
		<h1 class="text-lg font-semibold">HTML Email Editor</h1>
	</div>

	<div class="flex-grow">
		<SplitPane>
			<section class="w-full h-full" slot="a">
				{#if browser}
					{#await import("$lib/MonacoEditor.svelte") then { default: MonacoEditor }}
						<MonacoEditor
							{value}
							{options}
							on:input={(e) => (html = e.target.value)}
						/>
					{/await}
				{/if}
			</section>

			<section slot="b" style="height: 100%;">
				<div>{@html html}</div>
			</section>
		</SplitPane>
	</div>
</div>