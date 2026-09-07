/**
 * Spring-physics cursor trail on a 2D canvas.
 *
 * Several independent "lines" chase the pointer. Each line is a chain of
 * nodes: the head is pulled toward the cursor by a spring, and every
 * following node is pulled toward the one ahead of it. Drawing the chain as
 * quadratic curves with additive blending gives the wispy ink look.
 */

export type TrailOptions = {
  canvas: HTMLCanvasElement;
  /** Any CSS colour. Additive blending means alpha reads as intensity. */
  color: string;
};

const TRAILS = 20;
const NODES_PER_TRAIL = 34;
const FRICTION = 0.48;
const DAMPENING = 0.22;
const TENSION = 0.98;

type Node = { x: number; y: number; vx: number; vy: number };

class Line {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(spring: number, x: number, y: number) {
    // Jitter per line so the strands separate instead of moving as one.
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = FRICTION + 0.01 * Math.random() - 0.005;
    this.nodes = Array.from({ length: NODES_PER_TRAIL }, () => ({
      x, y, vx: 0, vy: 0,
    }));
  }

  update(cursorX: number, cursorY: number) {
    let spring = this.spring;
    const head = this.nodes[0];
    head.vx += (cursorX - head.x) * spring;
    head.vy += (cursorY - head.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * DAMPENING;
        node.vy += prev.vy * DAMPENING;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      // Trailing nodes follow more loosely than the head.
      spring *= TENSION;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const [first] = this.nodes;
    ctx.beginPath();
    ctx.moveTo(first.x, first.y);

    // Mid-points between nodes keep the curve smooth.
    for (let i = 1; i < this.nodes.length - 2; i++) {
      const node = this.nodes[i];
      const next = this.nodes[i + 1];
      ctx.quadraticCurveTo(node.x, node.y, (node.x + next.x) * 0.5, (node.y + next.y) * 0.5);
    }

    const penultimate = this.nodes[this.nodes.length - 2];
    const last = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);
    ctx.stroke();
  }
}

export function createCursorTrail({ canvas, color }: TrailOptions) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { destroy: () => {} };

  const cursor = { x: 0, y: 0 };
  let lines: Line[] = [];
  let frame = 0;
  let started = false;
  let paused = false;

  const resize = () => {
    // Match the backing store to the device pixel ratio so curves stay crisp.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const spawn = () => {
    lines = Array.from(
      { length: TRAILS },
      // A wider spring spread makes the strands separate into a ribbon
      // instead of overlapping into a single bright line.
      (_, i) => new Line(0.4 + (i / TRAILS) * 0.09, cursor.x, cursor.y),
    );
  };

  const render = () => {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    for (const line of lines) {
      line.update(cursor.x, cursor.y);
      line.draw(ctx);
    }

    frame = window.requestAnimationFrame(render);
  };

  const track = (e: PointerEvent) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;

    // Start on the first real pointer movement so nothing is drawn at 0,0.
    if (!started) {
      started = true;
      spawn();
      if (!paused) render();
    }
  };

  const pause = () => {
    paused = true;
    window.cancelAnimationFrame(frame);
    frame = 0;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  };

  const resume = () => {
    if (!paused) return;
    paused = false;
    if (started && !frame) render();
  };

  resize();
  // Pointer events cover mouse and stylus without hijacking touch scrolling.
  window.addEventListener('pointermove', track, { passive: true });
  window.addEventListener('resize', resize);
  window.addEventListener('blur', pause);
  window.addEventListener('focus', resume);

  return {
    destroy() {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', track);
      window.removeEventListener('resize', resize);
      window.removeEventListener('blur', pause);
      window.removeEventListener('focus', resume);
    },
  };
}
