<script>
    // (1) Desired editor features:
    import "monaco-editor/esm/vs/editor/browser/controller/coreCommands.js";
    import "monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js";
    // import 'monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget.js';
    // import 'monaco-editor/esm/vs/editor/browser/widget/diffNavigator.js';
    // import 'monaco-editor/esm/vs/editor/contrib/anchorSelect/anchorSelect.js';
    import "monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js";
    // import 'monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations.js';
    // import 'monaco-editor/esm/vs/editor/contrib/caretOperations/transpose.js';
    import "monaco-editor/esm/vs/editor/contrib/clipboard/clipboard.js";
    // import 'monaco-editor/esm/vs/editor/contrib/codeAction/codeActionContributions.js';
    import "monaco-editor/esm/vs/editor/contrib/codelens/codelensController.js";
    import "monaco-editor/esm/vs/editor/contrib/colorPicker/colorContributions.js";
    import "monaco-editor/esm/vs/editor/contrib/comment/comment.js";
    import "monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu.js";
    // import 'monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo.js';
    // import 'monaco-editor/esm/vs/editor/contrib/dnd/dnd.js';
    // import 'monaco-editor/esm/vs/editor/contrib/documentSymbols/documentSymbols.js';
    import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
    import "monaco-editor/esm/vs/editor/contrib/folding/folding.js";
    // import 'monaco-editor/esm/vs/editor/contrib/fontZoom/fontZoom.js';
    import "monaco-editor/esm/vs/editor/contrib/format/formatActions.js";
    // import 'monaco-editor/esm/vs/editor/contrib/gotoError/gotoError.js';
    // import 'monaco-editor/esm/vs/editor/contrib/gotoSymbol/goToCommands.js';
    // import 'monaco-editor/esm/vs/editor/contrib/gotoSymbol/link/goToDefinitionAtPosition.js';
    import "monaco-editor/esm/vs/editor/contrib/hover/hover.js";
    import "monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js";
    import "monaco-editor/esm/vs/editor/contrib/indentation/indentation.js";
    import "monaco-editor/esm/vs/editor/contrib/inlineHints/inlineHintsController.js";
    import "monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js";
    import "monaco-editor/esm/vs/editor/contrib/linkedEditing/linkedEditing.js";
    // import 'monaco-editor/esm/vs/editor/contrib/links/links.js';
    import "monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js";
    // import 'monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints.js';
    import "monaco-editor/esm/vs/editor/contrib/rename/rename.js";
    import "monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js";
    import "monaco-editor/esm/vs/editor/contrib/snippet/snippetController2.js";
    import "monaco-editor/esm/vs/editor/contrib/suggest/suggestController.js";
    // import 'monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/toggleTabFocusMode.js';
    // import 'monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/unusualLineTerminators.js';
    // import 'monaco-editor/esm/vs/editor/contrib/viewportSemanticTokens/viewportSemanticTokens.js';
    import "monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js";
    // import 'monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js';
    // import 'monaco-editor/esm/vs/editor/contrib/wordPartOperations/wordPartOperations.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
    import "monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js";
    // import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
    // END_FEATURES
    import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

    // (2) Desired languages:
    import "monaco-editor/esm/vs/language/css/monaco.contribution.js";
    import "monaco-editor/esm/vs/language/html/monaco.contribution.js";
    // import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
    // import 'monaco-editor/esm/vs/language/json/monaco.contribution.js';
    import "monaco-editor/esm/vs/basic-languages/html/html.contribution.js";
    // import "monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js";
    // import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js";

    import MonacoWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
    import MonacoHTMLWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
    import MonacoTypescriptWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

    // @ts-ignore
    window.MonacoEnvironment = {
        getWorker(moduleId, label) {
            console.log("getWorker", moduleId, label);
            // if (label === "json") { return "language/json/json.worker"; }
            // if (label === "css") { return +"language/css/css.worker"; }
            if (label === "html") {
                return new MonacoHTMLWorker();
            }
            if (label === "typescript" || label === "javascript") {
                return new MonacoTypescriptWorker();
            }
            return new MonacoWorker();
        },
    };

    import { onMount } from "svelte";

    export let value = "Hello World";
    export let options: monaco.editor.IStandaloneEditorConstructionOptions;

    let container: HTMLDivElement;
    let editor: monaco.editor.IStandaloneCodeEditor;

    onMount(() => {
        editor = monaco.editor.create(container, {
            value,
            ...options,
        });
    });
    $: if (editor) {
        editor.setValue(value);
    }

    import { createEventDispatcher } from "svelte";
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
