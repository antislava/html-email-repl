<script>
    export let html: string;
    let w: number;
    let h: number;

    let iframe: HTMLIFrameElement;
    $: if (iframe) {
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
    }
</script>

<div
    bind:clientWidth={w}
    bind:clientHeight={h}
    class="absolute inset-0 overflow-y-auto"
>
    {#if w}
        <div
            class="absolute right-0 top-0 px-2 py-0.5 bg-gray-100 font-semibold text-sm rounded-l rounded-t-none opacity-50"
        >
            {w} x {h}
        </div>
    {/if}

    <iframe
        title="result"
        bind:this={iframe}
        sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
    />
</div>

<style>
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
    }
</style>
