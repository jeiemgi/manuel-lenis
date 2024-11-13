import Cursor from "./Cursor";
import Header from "./Header";
import HeroVideo from "./HeroVideo";
import Reel from "./Reel";

export const destroy = () => {
  Cursor.destroy();
  Header.destroy();
  HeroVideo.destroy();
  Reel.destroy();
};

export const init = () => {
  const pathName = window.location.pathname;

  Cursor.init();
  Header.init();

  switch (pathName) {
    case "/":
      HeroVideo.init();
      break;
    case "/reel":
      Reel.init();
      break;
  }

  document.addEventListener(
    "astro:before-swap",
    () => {
      destroy();
    },
    { once: true },
  );
};

document.addEventListener("astro:after-swap", init);

init();
