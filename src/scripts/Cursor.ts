import gsap from "gsap";

class Cursor {
  x: number = 0;
  y: number = 0;

  cursorEl: HTMLDivElement | null = null;
  isInitialized = false;
  hoverEls: HTMLElement[] = [];
  quickToX: gsap.QuickToFunc | null = null;
  quickToY: gsap.QuickToFunc | null = null;

  constructor() {
    this.cursorEl = document.querySelector("#cursor");
    this.quickToX = gsap.quickTo("#cursor", "x", {
      duration: 0.4,
      ease: "power3",
    });
    this.quickToY = gsap.quickTo("#cursor", "y", {
      duration: 0.4,
      ease: "power3",
    });
    this.mouseMove();
  }

  init() {
    this.hoverElements();
  }

  onMouseMove = (e: MouseEvent) => {
    if (!this.quickToX || !this.quickToY) return;

    if (!this.isInitialized) {
      gsap.to(this.cursorEl, { opacity: 0.5, duration: 0.5 });
      this.quickToX(this.x, this.x);
      this.quickToY(this.y, this.y);
      this.isInitialized = true;
      return;
    }

    this.x = e.clientX;
    this.y = e.clientY;
    this.quickToX(this.x);
    this.quickToY(this.y);
  };

  mouseMove = () => {
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onHoverIn = (e: MouseEvent) => {
    gsap.to(this.cursorEl, {
      scale: 2,
      opacity: 0.5,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  onHoverOut = () => {
    gsap.to(this.cursorEl, {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  hoverElements = () => {
    const hoverEls = [
      ...document.querySelectorAll<HTMLElement>("[data-hover]"),
    ].filter((el) => el.dataset.hover === "true");

    hoverEls.forEach((el: HTMLElement) => {
      el.addEventListener("mouseover", this.onHoverIn);
      el.addEventListener("mouseout", this.onHoverOut);
    });
  };

  destroy() {
    this.hoverEls.forEach((el: HTMLElement) => {
      el.removeEventListener("mouseover", this.onHoverIn);
      el.removeEventListener("mouseout", this.onHoverOut);
    });
  }
}

export default new Cursor();
