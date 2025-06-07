// scrollReveal.js
import ScrollReveal from "scrollreveal";

export const initScrollReveal = () => {
    ScrollReveal().reveal(".box-reveal-bottom", {
        duration: 800,
        distance: "50px",
        origin: "bottom",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-left", {
        duration: 800,
        distance: "50px",
        origin: "left",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-top", {
        duration: 800,
        distance: "50px",
        origin: "top",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-right", {
        duration: 800,
        distance: "50px",
        origin: "right",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-right1", {
        duration: 800,
        delay: 200,
        distance: "50px",
        origin: "right",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-right2", {
        duration: 800,
        delay: 400,
        distance: "50px",
        origin: "right",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-right3", {
        duration: 800,
        delay: 600,
        distance: "50px",
        origin: "right",
        reset: false,
        easing: "ease-in-out",
    });

    ScrollReveal().reveal(".box-reveal-right4", {
        duration: 800,
        delay: 800,
        distance: "50px",
        origin: "right",
        reset: false,
        easing: "ease-in-out",
    });
};
