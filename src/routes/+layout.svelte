<script>
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/navbar.svelte';
    import 'bootstrap-icons/font/bootstrap-icons.css'

    onMount(async () => {
        const locomotiveScroll = await import('$lib/modules/locomotiveScroll.js');
    });
</script>

<div class="main-container">
    <slot />
    <Navbar />
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>