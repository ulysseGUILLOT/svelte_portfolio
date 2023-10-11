<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
    import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<div class="main-container">
    <Navbar />
    <slot />
    <Footer />
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>