import gsap from "gsap";
import Player from "@vimeo/player";

let player: Player | null = null;

const init = () => {
  const lightBox = document.querySelector("#reel-lightbox");

  gsap.to(lightBox, { opacity: 1, pointerEvents: "all" });
  player = new Player("reel-container", {
    id: 825863563,
    autoplay: true,
    pip: false,
    color: "#c92624",
  });
};

const destroy = () => {
  const lightBox = document.querySelector("#reel-lightbox");

  if (player) player.destroy();
  if (lightBox) gsap.to(lightBox, { opacity: 0, pointerEvents: "none" });
};

const Reel = {
  init,
  destroy,
};

export default Reel;
