import Header from "./Header";
import HeroVideo from "./HeroVideo";

export const init = () => {
  Header.init();
  HeroVideo.init();

  document.addEventListener(
    "astro:before-swap",
    () => {
      destroy();
    },
    { once: true },
  );
};

export const destroy = () => {
  Header.destroy();
  HeroVideo.destroy();
};

document.addEventListener("astro:after-swap", init);

init();
