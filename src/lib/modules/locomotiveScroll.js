import LocomotiveScroll from 'locomotive-scroll';

export const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1,
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