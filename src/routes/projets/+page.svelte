<script>
    import Navbar from '$lib/components/navbar.svelte';
    import projects from '$lib/projects.js'

    let details = '';
    projects.forEach(p => p.selected = false);

    function displayDetails(index) {
        details = projects[index].details;
        projects.forEach(p => p.selected = false); // réinitialise tous les autres projets
        projects[index].selected = true;
    }
</script>

<Navbar/>
<div class="projectsContainer">
    <div class="projectsList">
        <h3 class="subtitle">PROJETS</h3>
        <div class="projectsScrollable" id="scrollContainer">
            {#each projects as project,i }
                <div class="separator"></div>
                <button class="project" class:selected={project.selected} on:click={() => displayDetails(i)}>
                    <span class="title">{project.title}</span>
                    <span class="type">{project.type}</span>
                </button>
            {/each}
            <div class="shadow"></div>
        </div>
    </div>


    <div class="projectDetails">
        {#if details}
            <h3 class="subtitle">DÉTAILS</h3>
            <div class="detailsContent">
                {details}
            </div>
        {/if}
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
        color: rgba(187, 184, 184, 0.7);
    }

    .projectsScrollable {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: scroll;
        scrollbar-width: none !important;
    }

    .separator {
        border-top: 2px solid #9d9d9d;
    }

    .project {
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        font-size: 18px;
        padding: 25px 0 25px 0;
        color: #ffffff;
        border: none;
        background-color: rgba(0, 0, 0, 0);
    }

    .title {
        transition: transform 0.5s ease;
    }

    .type {
        font-size: 14px;
        color: #9d9d9d;
    }

    .project:hover {
        cursor: pointer;
    }

    .project:hover .title {
        color: rgba(36, 255, 197, 1);
        transform: translateX(20px) scale(120%);
    }

    .project:hover .type {
        color: rgba(36, 255, 197, 0.5);
    }

    .project.selected .title {
        color: rgba(36, 255, 197, 1);
        transform: translateX(20px) scale(120%);
    }

    .project.selected .type {
        color: rgba(36, 255, 197, 0.5);
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0;
        left: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    }

    .projectDetails {
        display: flex;
        flex-direction: column;
        padding: 0 5% 0 5%;
        width: 70%;
        color: #ffffff;
    }

    .detailsContent {
        flex-grow: 1;
    }
</style>