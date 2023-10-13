<script>
    import logo from '$lib/assets/logoTransparent.png';
    import {mixText} from '$lib/modules/linkHoover.js';
    import navRoutes from '$lib/navRoutes.js';

    function handleMouseOver(event) {
        mixText(event.target);
    }
</script>

<nav class="navbar">
    <a class="logo" href="/"><img src={logo} alt="logo Ulysse Guillot"></a>

    <ul class="nav-links">
        {#each navRoutes as route, i}
            <li><a class="nav-link" href={route.href} on:mouseover="{handleMouseOver}">{route.label}</a></li>
            {#if i !== navRoutes.length - 1}
                /
            {/if}
        {/each}
    </ul>
</nav>

<style>
    .navbar {
        position: absolute;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    .logo img {
        //margin-left: 100px;
        max-height: 200px;
    }

    .nav-links {
        display: flex;
        list-style: none;
        border-bottom: 2px solid #ffffff;
        color: #ffffff;
        padding: 0 0 10px 0;
    }

    .nav-link {
        margin: 0 20px;
        text-decoration: none;
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;
    }

    .nav-link:hover {
        color: #ffffff90;
    }
</style>