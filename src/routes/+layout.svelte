<script>
    import { onMount } from 'svelte';
    import 'bootstrap-icons/font/bootstrap-icons.css'
    import Noise  from '$lib/components/noise.svelte'

    onMount(async () => {
        const locomotiveScroll = await import('$lib/modules/locomotiveScroll.js');
    });
</script>
<Noise />
<slot />