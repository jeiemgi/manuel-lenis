import gsap from "gsap";

let menuMobile: HTMLDivElement | null;
let menuBtn: HTMLButtonElement | null;
let menuClose: HTMLButtonElement | null;
let navLinks: NodeListOf<HTMLAnchorElement> | null;
let mobileLinks: NodeListOf<HTMLAnchorElement> | null;

const Header = {
  showMenu: () => {
    if (!menuMobile || !mobileLinks) return;
    menuMobile.dataset.isOpen = "true";
    gsap.to(menuMobile, {
      opacity: 1,
      duration: 0.5,
      ease: "expo.out",
      pointerEvents: "auto",
    });
    gsap.from(mobileLinks, {
      y: 10,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "expo.out",
    });
  },
  hideMenu: () => {
    if (!menuMobile || !mobileLinks) return;

    menuMobile.dataset.isOpen = "false";
    gsap.to(menuMobile, {
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      pointerEvents: "none",
    });
  },

  toggleMenu: () => {
    console.log("Header toggle");
    const isOpen = menuMobile?.dataset.isOpen;
    if (isOpen === "true") {
      Header.hideMenu();
    } else {
      Header.showMenu();
    }
  },

  init: () => {
    menuMobile = document.querySelector("#mobile-menu");
    menuBtn = document.querySelector("#mobile-menu-btn");
    menuClose = document.querySelector("#mobile-menu-close");
    mobileLinks = menuMobile?.querySelectorAll(".mobile-nav-link") || null;

    if (!menuMobile || !menuBtn || !menuClose || !mobileLinks) {
      console.error("Header menu not found");
      return;
    }

    gsap.set(menuMobile, { pointerEvents: "none" });
    menuBtn.addEventListener("click", Header.toggleMenu);
    menuClose.addEventListener("click", Header.toggleMenu);
  },
  destroy: () => {
    console.log("Header destroy");
    const isOpen = menuMobile?.dataset.isOpen;
    if (isOpen === "true") Header.hideMenu();
    menuBtn?.removeEventListener("click", Header.toggleMenu);
    menuClose?.removeEventListener("click", Header.toggleMenu);
  },
};

export default Header;
