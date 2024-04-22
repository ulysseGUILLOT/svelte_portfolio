<script>
    import logo from '$lib/assets/logoTransparent.png';
    import {mixText} from '$lib/modules/linkHoover.js';
    import navRoutes from '$lib/navRoutes.js';

    function handleMouseOver(event, oldText) {
        mixText(event.target, oldText);
    }
</script>

<nav class="navbar">
    <a class="logo" href="/"><img src={logo} alt="logo Ulysse Guillot"></a>

    <ul class="nav-links">
        {#each navRoutes as route, i}
            <li><a class="nav-link" href={route.href} on:mouseover="{(event) => handleMouseOver(event, route.label)}" style="width: {route.label.length * 11}px">{route.label}</a></li>
            {#if i !== navRoutes.length - 1}
                /
            {/if}
        {/each}
    </ul>
</nav>

<style>
    .navbar {
        z-index: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding-top: 20px;
    }

    .logo img {
        //margin-left: 100px;
        max-height: 200px;
    }

    .nav-links {
        display: flex;
        list-style: none;
        border-bottom: 2px solid rgba(255, 255, 255, 0.8);
        color: rgba(255, 255, 255, 0.8);
        padding: 0 0 10px 0;
    }

    .nav-link {
        display: flex;
        margin: 0 20px;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        font-weight: 400;
    }

    .nav-link:hover {
        color: rgba(255, 255, 255, 0.4);;
    }
</style>