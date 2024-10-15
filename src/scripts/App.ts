import Cursor from "./Cursor";

let cursor: Cursor;

export const init = () => {
  cursor = new Cursor("#cursor");

  document.addEventListener(
    "astro:before-swap",
    () => {
      destroy();
    },
    { once: true },
  );
};

export const destroy = () => {
  cursor.destroy();
};

document.addEventListener("astro:after-swap", init);

init();
