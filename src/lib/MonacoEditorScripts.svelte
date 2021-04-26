<!-- From https://stackoverflow.com/questions/57048510/how-to-initialize-microsoft-monaco-editor-in-a-browser-using-simple-javascript-o -->
<script context="module">
    declare var require: any;
    declare var monaco: typeof import("monaco-editor/esm/vs/editor/editor.api.js");
    declare global {
        interface Window {
            MonacoEnvironment: any;
        }
    }
</script>

<script>
    import type { editor } from "monaco-editor/esm/vs/editor/editor.api.js";
    export let value: string;
    export let options: editor.IStandaloneEditorConstructionOptions;
    let editor: editor.IStandaloneCodeEditor;
    let container: HTMLDivElement;

    onMount(() => {
        const script = document.createElement("script");
        script.src = `https://unpkg.com/monaco-editor@0.23.0/min/vs/loader.js`;
        document.head.appendChild(script);
        script.onload = () => {
            require.config({
                paths: { vs: "https://unpkg.com/monaco-editor@0.23.0/min/vs" },
            });
            window.MonacoEnvironment = { getWorkerUrl: () => proxy };

            let proxy = URL.createObjectURL(
                new Blob(
                    [
                        `
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@0.23.0/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@0.23.0/min/vs/base/worker/workerMain.js');
`,
                    ],
                    { type: "text/javascript" }
                )
            );

            require(["vs/editor/editor.main"], function () {
                editor = monaco.editor.create(container, {
                    value,
                    ...options,
                });
            });
        };
        // return () => {
        //     script.parentNode.removeChild(script);
        // };
    });
    $: if (editor) {
        editor.setValue(value);
    }

    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();
    function emitValue() {
        dispatch("update", {
            value: editor.getValue(),
        });
    }
</script>

<div class="w-full h-full relative overflow-hidden">
    <div
        class="absolute inset-0 w-full h-full"
        on:keyup={emitValue}
        bind:this={container}
    />
</div>
