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
    // import 'monaco-editor/esm/vs/editor/contrib/codelens/codelensController.js';
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
    // import 'monaco-editor/esm/vs/editor/contrib/hover/hover.js';
    // import 'monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js';
    // import 'monaco-editor/esm/vs/editor/contrib/indentation/indentation.js';
    // import 'monaco-editor/esm/vs/editor/contrib/inlineHints/inlineHintsController.js';
    // import 'monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js';
    // import 'monaco-editor/esm/vs/editor/contrib/linkedEditing/linkedEditing.js';
    // import 'monaco-editor/esm/vs/editor/contrib/links/links.js';
    // import 'monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js';
    // import 'monaco-editor/esm/vs/editor/contrib/parameterHints/parameterHints.js';
    // import 'monaco-editor/esm/vs/editor/contrib/rename/rename.js';
    // import 'monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js';
    // import 'monaco-editor/esm/vs/editor/contrib/snippet/snippetController2.js';
    // import 'monaco-editor/esm/vs/editor/contrib/suggest/suggestController.js';
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
    // import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
    // import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
    // END_FEATURES
    import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

    // (2) Desired languages:
    // import 'monaco-editor/esm/vs/language/css/monaco.contribution.js';
    import "monaco-editor/esm/vs/language/html/monaco.contribution.js";
    // import 'monaco-editor/esm/vs/language/json/monaco.contribution.js';
    // import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';

    // import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';
    // import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js';
    // import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';

    import { onMount } from "svelte";

    let container;

    onMount(() => {
        monaco.editor.create(container, {
            theme: "vs-dark",
            value: ["<div>", "test", "</div>"].join("\n"),
            language: "html",
            // fontSize: 16,
            // fontWeight: "500",
            // formatOnType: true,
            // formatOnPaste: true,
            // highlightActiveIndentGuide: true,
            // lineNumbersMinChars: 2,
            // showFoldingControls: "always",
            // tabCompletion: "on",
        });
    });
</script>

<div
    on:input={(e) => console.log(e)}
    class="monaco-container"
    bind:this={container}
    style="height: 500px; text-align: left"
/>

<!-- See https://dev.decoupled.com/docs-magic-webWorker-example-monaco if setting up webWorker via self.MonacoEnvironment -->

<!-- self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        // if (label === 'json') {
        // 	return './json.worker.bundle.js';
        // }
        // if (label === 'css') {
        // 	return './css.worker.bundle.js';
        // }
        // if (label === 'html') {
        // 	return './html.worker.bundle.js';
        // }
        // if (label === 'typescript' || label === 'javascript') {
        // 	return './ts.worker.bundle.js';
        // }
        return './editor.worker.bundle.js';
    }
} -->
