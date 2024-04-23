<script>
    import Navbar from '$lib/components/navbar.svelte';

    let nbParagraph = 12;

</script>

<Navbar/>
<div class="projectsContainer">
    <div class="projectsList">
        <h3 class="subtitle">PROJETS</h3>
        <div class="projectsScrollable" id="scrollContainer">
            {#each Array.from({length: nbParagraph}, (_, i) => i) as i}
                <p class="project">
                    Lorem ipsum dolor sit amet
                </p>
            {/each}
            <div class="shadow"></div>
        </div>
    </div>


    <div class="projectDescription">
        <p>
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
        height: 60vh;
        display: flex;
        flex-direction: row;
        margin: 50px 0 50px 0;
    }

    .projectsList {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 25%;
        height: 100%;
        overflow: hidden;
        border-right: 2px solid #9d9d9d;
        padding: 0 5% 0 5%;
    }

    .subtitle {
        margin-bottom: 20px;
        font-size: 25px;
        color: #9d9d9d;
    }

    .projectsScrollable {
        flex-grow: 1;
        overflow-y: scroll ;
        scrollbar-width: none !important;
    }

    .project {
        padding: 25px 0 25px 0;
        color: #ffffff;
        border-top: 2px solid #9d9d9d;
    }

    .project:hover {
        color: #ab4eee;
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    }

    .projectDescription {
        padding: 0 5% 0 5%;
        width: 70%;
        color: #ffffff;
    }
</style>