<script>
    import { onMount } from 'svelte';
    onMount(() => {
        const noise = () => {
            let canvas, ctx;

            let wWidth, wHeight;

            let noiseData = [];
            let frame = 0;

            let loopTimeout;


            // Create Noise
            const createNoise = () => {
                const idata = ctx.createImageData(wWidth, wHeight);
                const buffer32 = new Uint32Array(idata.data.buffer);
                const len = buffer32.length;

                for (let i = 0; i < len; i++) {
                    if (Math.random() < 0.5) {
                        buffer32[i] = 0xffffffff;
                    }
                }

                noiseData.push(idata);
            };


            // Play Noise
            const paintNoise = () => {
                if (frame === 9) {
                    frame = 0;
                } else {
                    frame++;
                }

                ctx.putImageData(noiseData[frame], 0, 0);
            };


            // Loop
            const loop = () => {
                paintNoise(frame);

                loopTimeout = window.setTimeout(() => {
                    window.requestAnimationFrame(loop);
                }, (20));
            };


            // Setup
            const setup = () => {
                wWidth = window.innerWidth /1.5;
                wHeight = window.innerHeight/1.5;

                canvas.width = wWidth;
                canvas.height = wHeight;

                for (let i = 0; i < 10; i++) {
                    createNoise();
                }

                loop();
            };


            // Reset
            let resizeThrottle;
            const reset = () => {
                window.addEventListener('resize', () => {
                    window.clearTimeout(resizeThrottle);

                    resizeThrottle = window.setTimeout(() => {
                        window.clearTimeout(loopTimeout);
                        setup();
                    }, 200);
                }, false);
            };


            // Init
            const init = (() => {
                canvas = document.getElementById('noise');
                ctx = canvas.getContext('2d');

                setup();
            })();
        };

        noise();
    });
</script>

<canvas id="noise" class="noise"></canvas>

<style>
    .noise {
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        pointer-events: none;
        opacity: .04;
    }
</style>