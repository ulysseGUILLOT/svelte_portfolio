<script>
    import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="main-container">
    <Navbar />

    <slot />
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>