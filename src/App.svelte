<script lang="ts">
    import init, { Chart } from "plot";
    import { onMount } from "svelte";

    let loaded = false;
    let power = 2;

    onMount(async () => {
        await init();
        loaded = true;
    });

    let canvas: HTMLCanvasElement;

    $: {
        if (loaded) {
            Chart.power(canvas, power);
        }
    }
</script>

<main>
    <canvas id="plot" bind:this={canvas} height={600} width={600} />
    <br />
    x ^ {power} <input type="range" bind:value={power} min="0" max="5" />
</main>

<style>
</style>
