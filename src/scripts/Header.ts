import gsap from "gsap";

let mobileMenu: HTMLDivElement | null;
let mobileOpen: HTMLButtonElement | null;
let mobileClose: HTMLButtonElement | null;
let mobileLinks: NodeListOf<HTMLAnchorElement> | null;

const Header = {
  showMenu: () => {
    if (!mobileMenu || !mobileLinks) return;
    mobileMenu.dataset.isOpen = "true";
    gsap.to(mobileMenu, {
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
    if (!mobileMenu || !mobileLinks) return;

    mobileMenu.dataset.isOpen = "false";
    gsap.to(mobileMenu, {
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      pointerEvents: "none",
    });
  },

  toggleMenu: () => {
    const isOpen = mobileMenu?.dataset.isOpen;
    if (isOpen === "true") {
      Header.hideMenu();
    } else {
      Header.showMenu();
    }
  },

  init: () => {
    mobileMenu = document.querySelector("#mobile-menu");
    mobileOpen = document.querySelector("#mobile-menu-btn");
    mobileClose = document.querySelector("#mobile-menu-close");
    mobileLinks = mobileMenu?.querySelectorAll(".mobile-nav-link") || null;

    if (!mobileMenu || !mobileOpen || !mobileClose || !mobileLinks) {
      console.error("Header menu not found");
      return;
    }

    gsap.set(mobileMenu, { pointerEvents: "none" });
    mobileOpen.addEventListener("click", Header.toggleMenu);
    mobileClose.addEventListener("click", Header.toggleMenu);
  },
  destroy: () => {
    const isOpen = mobileMenu?.dataset.isOpen;
    if (isOpen === "true") Header.hideMenu();
    mobileOpen?.removeEventListener("click", Header.toggleMenu);
    mobileClose?.removeEventListener("click", Header.toggleMenu);
  },
};

export default Header;
