class Cursor {
  x: number = 0;
  y: number = 0;
  cursorEl: HTMLDivElement;
  hoverEls: HTMLElement[] = [];

  constructor(selector: string) {
    const cursorEl = document.querySelector<HTMLDivElement>(selector);
    if (!cursorEl) throw new Error("Cursor element not found");

    this.cursorEl = cursorEl;

    this.moveMouse();
    this.hoverElements();
  }

  onMouseMove = (e: MouseEvent) => {
    this.x = e.clientX;
    this.y = e.clientY;
    this.cursorEl.style.left = `${e.clientX}px`;
    this.cursorEl.style.top = `${e.clientY}px`;
  };

  moveMouse = () => {
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onHoverIn = (e: MouseEvent, el: HTMLElement) => {
    this.cursorEl.classList.add("hovering");
  };

  onHoverOut = (e: MouseEvent, el: HTMLElement) => {
    this.cursorEl.classList.remove("hovering");
  };

  hoverElements = () => {
    const hoverEls = document.querySelectorAll<HTMLElement>("[data-hover]");
    hoverEls.forEach((el: HTMLElement) => {
      el.addEventListener("mouseover", (e) => this.onHoverIn(e, el));
      el.addEventListener("mouseout", (e) => this.onHoverOut(e, el));
    });
  };

  destroy() {
    document.removeEventListener("mousemove", this.onMouseMove);
    this.hoverEls.forEach((el: HTMLElement) => {
      el.removeEventListener("mouseover", this.onHoverIn);
      el.removeEventListener("mouseout", this.onHoverOut);
    });
  }
}

export default Cursor;
