<script>
    import video from "$lib/assets/video/background.mp4";
    import Footer from "$lib/components/footer.svelte";
</script>

<section class="home">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video width="100%" loop="true" autoplay class="bg-video">
        <source src={video} type="video/mp4">
    </video>


    <div class="presentation">
        <div class="infos">
            <div class="slogan">The Odyssey Of a Numeric Expert</div>
            <div class="name"> Ulysse GUILLOT</div>
        </div>

        <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </div>
    <Footer/>
</section>




<style>
    .home {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .bg-video {
        position: absolute;
        z-index: 0;
    }

    .presentation {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .slogan {
        mix-blend-mode: difference;
        color: #ffffff;
        font-size: 30px;
        font-style: italic;
    }

    .name {
        color: #ffffff;
        font-size: 80px;
        letter-spacing: 10px;
        margin-bottom: 80px;
    }

    .description {
        mix-blend-mode: difference;
        color: #ffffff;
        //padding-inline: 30%;
    }

    Footer {
        z-index: 1;
    }
</style>