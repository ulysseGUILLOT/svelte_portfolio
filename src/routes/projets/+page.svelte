<script>
    import Navbar from '$lib/components/navbar.svelte';

    let nbParagraph = 12;

</script>

<Navbar/>
<div class="projectsContainer">
    <div class="projectsList" id="scrollContainer">
        {#each Array.from({length: nbParagraph}, (_, i) => i) as i}
            <p class="project">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
            </p>
        {/each}
    </div>

    <div class="projectDescription">
        <p class="project">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>
    </div>
</div>

<style>
    .projectsContainer {
        height: 70vh;
        display: flex;
        flex-direction: row;
    }

    .projectsList {
        width: 30%;
        overflow: auto;
        scrollbar-width: none !important;
    }

    .project {
        margin: 40px 20% 0 20%;
        color: #ffffff;
    }

    .projectDescription {
        width: 70%;
    }
</style>