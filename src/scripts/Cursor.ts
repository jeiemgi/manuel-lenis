class Cursor {
  x: number = 0;
  y: number = 0;
  cursorEl: HTMLDivElement;

  constructor(selector: string) {
    const cursorEl = document.querySelector<HTMLDivElement>(selector);
    if (!cursorEl) throw new Error("Cursor element not found");

    this.cursorEl = cursorEl;
    console.log("cursor created");
    document.querySelector("body")?.classList.add("custom-cursor");
    document.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = (e: MouseEvent) => {
    this.x = e.clientX;
    this.y = e.clientY;

    this.cursorEl.style.left = `${e.clientX}px`;
    this.cursorEl.style.top = `${e.clientY}px`;
  };

  destroy() {
    document.removeEventListener("mousemove", this.onMouseMove);
  }
}

export default Cursor;
