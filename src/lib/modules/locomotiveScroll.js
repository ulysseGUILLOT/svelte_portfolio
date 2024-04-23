import LocomotiveScroll from 'locomotive-scroll';

export const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: document.getElementById("scrollContainer"),
        content: document.getElementById("scrollContainer"),
        lerp: 0.1,
        duration: 2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 1,
        normalizeWheel: true,
        //easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    }
});