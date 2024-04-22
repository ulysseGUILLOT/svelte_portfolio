<script>
    import Navbar from '$lib/components/navbar.svelte';
    import video from "$lib/assets/video/background.mp4";
    import Footer from "$lib/components/footer.svelte";
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video loop="true" muted autoplay class="bg-video">
    <source src={video} type="video/mp4">
</video>

<Navbar />
<div class="presentation">
    <p class="name">Ulysse Guillot</p>
    <p class="description">
        Je suis développeur logiciel, UX/UI designer & développeur web fullstack
    </p>
</div>
<Footer/>


<style>

    .bg-video {
        position: absolute;
        bottom: 0;
        right: 0;
        min-width: 100vw;
        min-height: 100vh;
        z-index: 0;
    }

    .presentation {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 30px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 10px;
    }

    .description {
        font-size: 25px;
        color: rgba(255, 255, 255, 0.8);
    }
</style>