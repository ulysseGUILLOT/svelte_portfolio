<script>
    import { onMount } from 'svelte';
    import 'bootstrap-icons/font/bootstrap-icons.css'

    onMount(async () => {
        const locomotiveScroll = await import('$lib/modules/locomotiveScroll.js');
    });
</script>

<slot />