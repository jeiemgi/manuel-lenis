class Cursor {
  x: number = 0;
  y: number = 0;
  cursorEl: HTMLDivElement;
  hoverEls: HTMLElement[] = [];

  constructor(selector: string) {
    const cursorEl = document.querySelector<HTMLDivElement>(selector);
    const cursorImg = cursorEl?.querySelector("img");

    if (!cursorEl) throw new Error("Cursor element not found");

    this.cursorEl = cursorEl;

    document.addEventListener("mousemove", this.onMouseMove);

    const hoverEls = document.querySelectorAll<HTMLElement>("[data-hover]");
    hoverEls.forEach((el: HTMLElement) => {
      el.addEventListener("mouseover", this.onHover);
      el.addEventListener("mouseout", this.onHoverOut);
    });
  }

  onHover = (e: MouseEvent) => {
    this.cursorEl.classList.add("hovering");
  };

  onHoverOut = (e: MouseEvent) => {
    this.cursorEl.classList.remove("hovering");
  };

  onMouseMove = (e: MouseEvent) => {
    this.x = e.clientX;
    this.y = e.clientY;

    this.cursorEl.style.left = `${e.clientX}px`;
    this.cursorEl.style.top = `${e.clientY}px`;
  };

  destroy() {
    document.removeEventListener("mousemove", this.onMouseMove);
    this.hoverEls.forEach((el: HTMLElement) => {
      el.removeEventListener("mouseover", this.onHover);
      el.removeEventListener("mouseout", this.onHoverOut);
    });
  }
}

export default Cursor;
