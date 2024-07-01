
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
gsap.to(".ImgHeading img", {
    width: "100%",
    maxWidth: "746px",
    delay: 9,
    duration: 0.5,
});
gsap.to(".spaceManContainer img", {
    transform: "translateX(14.985px) translateY(14.985px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(2.997deg) skewX(0deg) skewY(0deg)",
    opacity: 1,
});