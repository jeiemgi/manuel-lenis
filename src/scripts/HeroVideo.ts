import gsap from "gsap";

const init = () => {
  if (window.location.pathname !== "/") return;

  console.log("Hero video init");
  const heroVideo = document.querySelector("#hero-video");
  const elements = document.querySelectorAll(".hero-content-element");
  const quote = document.querySelectorAll(".hero-quote");

  const timeline = gsap.timeline({ paused: true });

  const header = document.querySelectorAll("header") || null;
  const footer = document.querySelectorAll("footer") || null;

  timeline.from(
    quote,
    {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    },
    0.5,
  );

  timeline.from(
    elements,
    {
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    },
    1.5,
  );

  timeline.from(
    heroVideo,
    {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    },
    2,
  );

  timeline.from(
    [header, footer],
    {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    },
    2,
  );

  timeline.play();
};

const destroy = () => {};

const HeroVideo = {
  init,
  destroy,
};

export default HeroVideo;
