
gsap.to(".spacedContainer", {
    backgroundColor: "transparent",

});

gsap.from(".moonSpaceDiv img", {
    opacity: 0,
    duration: 2,
    delay: 2,

});
gsap.from("body", {
    opacity: 0,
    duration: 2,
});

gsap.to(".girlImg", {
    x: "60px",
    duration: 0.5,
    delay: 4,
});
gsap.to(".girlImg", {
    x: "200px",
    transform: "translate(640px, 0px) scale(1.5, 1.5)",
    opacity: 0,
    duration: 1,
    delay: 4.5,
});
gsap.to(".spaceWindowMain", {
    transform: "translateX(50vw) translateY(0px) translateZ(0px) scaleX(4.5) scaleY(4.5) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    opacity: 0,
    duration: 1,
    delay: 4.7,
});
gsap.to(".moonSpaceDiv", {
    width: "100%",
    duration: 1,
    delay: 4.9,
});
gsap.to(".borderLine", {
    width: "100%",
    duration: 3.8,
    delay: 2,
});
gsap.to(".borderLine", {

    opacity: 0,
    duration: 7,
    delay: 2.5,
});
gsap.to(".spaceWindowMain", {
    display: "none",
    duration: 1,
    delay: 5,
});
gsap.from(".spaceNav", {
    opacity: 0,
    duration: 1,
    ease: Power1.easeIn,
});
gsap.to(".spaceMain", {
    display: "block",
    duration: 0.5,
    delay: 6,
});
gsap.from(".spaceHeader", {
    opacity: 0,
    duration: 0.5,
    delay: 6,
});


gsap.to(".boxContainer", {
    display: "block",
    opacity: 1,
    duration: 1,
    delay: 9,
});
gsap.to(".BoxHeading", {
    width: "100%",
    maxWidth: "650px",
    delay: 9,
    duration: 0.4,
})
gsap.to(".BoxHeading2", {
    width: "100%",
    maxWidth: "550px",
    delay: 9,
    duration: 0.5,
})
gsap.to(".BoxHeading", {
    transform: "translateX(110%) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    opacity: 0,
    backgroundColor: "white",
    delay: 9.5,
    duration: 0.5,
});
gsap.to(".BoxHeading2", {
    transform: "translateX(110%) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    opacity: 0,
    backgroundColor: "white",
    delay: 9.5,
    duration: 0.7,
});
gsap.from(".mainSpaceContainer", {
    display: "none",
    delay: 9,
    duration: 0.5,
});
gsap.to(".ImgHeading img", {
    width: "70%",
    delay: 9,
    duration: 0.5,
});
gsap.to(".spaceManContainer img", {
    transform: "translateX(14.985px) translateY(14.985px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(2.997deg) skewX(0deg) skewY(0deg)",
    opacity: 1,
});
gsap.from(".formParent", {
    opacity: 0,
    delay: 9.5,
    duration: 0.5,
});

gsap.from(".destinationMain", {
    display: "none",
    delay: 9.8,
});

gsap.to(".destinationMoonContainer .destinitionMassiveHeading", {
    transform: "translateX(360px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    delay: 9.8,
    scrollTrigger: {
        trigger: ".destinationMoonContainer",
        scroller: "body",
        scrub: 4,
    },
});
gsap.from(".amazingPictures", {
    display: "none",
    delay: 9.10,
});

gsap.from(".activitiesSection", {
    display: "none",
    delay: 9.10,
});
gsap.from(".activityBoxConatainer .activityBox", {
    transform: "scale(0.5)",
    duration: 1,
    delay: 9.10,
    scrollTrigger: {
        trigger: ".activityBoxConatainer",
        scroller: "body",
    },
});
gsap.from(".flightMain .flightShipsHeading", {
    x: "900px",
    duration: 1,
    scrollTrigger: {
        trigger: ".flightMain",
        scroller: "body",
        scrub: true,
    }
});
gsap.from(".spacedRockectMain .rocketImg", {
    transform: "translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(-15deg) skewX(0deg) skewY(0deg)",
    scrollTrigger: {
        trigger: ".spacedRockectMain",
        scroller: "body",
        scrub: true,
    }
});
gsap.from(".flightMain", {
    display: "none",
    delay: 9.10,
});

gsap.from(".spacedQuatersContainer", {
    display: "none",
    delay: 9.10,
});

gsap.from(".footerContainer", {
    display: "none",
    delay: 9.10,
});
gsap.from(".spacedRockectMain .stationImg", {
    transform: "translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(25deg) skewX(0deg) skewY(0deg)",
    scrollTrigger: {
        trigger: ".spacedRockectMain",
        scroller: "body",
        scrub: true,
    }
});
gsap.from(".spacedRockectMain .moonImg", {
    transform: "translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skewX(0deg) skewY(0deg)",
    scrollTrigger: {
        trigger: ".spacedRockectMain",
        scroller: "body",
        scrub: true,
    }
})
gsap.from(".spacedQuaterMain .spaceMainQuater", {
    transform: "translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    duration: 2,
    scrollTrigger: {
        trigger: ".spacedQuaterMain",
        scroller: "body",
        scrub: true,
    }
})
gsap.from(".spacedQuaterMain .quaterImg", {
    transform: " translateX(0vw) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    duration: 2,
    scrollTrigger: {
        trigger: ".spacedQuaterMain",
        scroller: "body",
        scrub: true,
    }
})
gsap.from(".spacedQuaterMain .spaceQuaterImg", {
    transform: "translateX(0vw) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
    duration: 2,
    scrollTrigger: {
        trigger: ".spacedQuaterMain",
        scroller: "body",
        scrub: true,
    }
})
gsap.from(".footerImagesContainer .footerimages", {
    scale: "0.5",
    duration: 1,
    delay: 1, // Adjust delay for testing
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".footerImagesContainer",
    }
});
gsap.from(".small-nav-bttom", {
    display: "none",
    delay: 9.10,
});