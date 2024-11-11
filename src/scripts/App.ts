// import Cursor from "./Cursor";
import Header from "./Header";

// let cursor: Cursor;

export const init = () => {
  Header.init();

  document.addEventListener(
    "astro:before-swap",
    () => {
      destroy();
    },
    { once: true },
  );
};

export const destroy = () => {
  // cursor.destroy();
  Header.destroy();
};

document.addEventListener("astro:after-swap", init);

init();
