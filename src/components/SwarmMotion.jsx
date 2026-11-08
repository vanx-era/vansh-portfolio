import React, { useEffect } from "react";

function SwarmMotion() {
  useEffect(() => {
    let canvas = document.querySelector(".swarm-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "swarm-canvas";
      canvas.setAttribute("aria-hidden", "true");
      document.body.appendChild(canvas);
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = 0, height = 0, raf = 0, active = true, disposed = false;
    const pointer = { x: -1000, y: -1000, tx: -1000, ty: -1000, seen: false };
    const trails = Array.from({ length: 22 }, (_, i) => ({ x: -1000, y: -1000, vx: 0, vy: 0, size: Math.max(1.2, 3.8 - i * .105), hue: i % 5 }));
    const motes = Array.from({ length: 34 }, (_, i) => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, phase: Math.random() * Math.PI * 2, speed: .25 + Math.random() * .65, radius: .7 + Math.random() * 1.4, hue: i % 4 }));
    const colors = ["227,43,60", "244,196,107", "242,239,235", "157,111,255", "111,194,204"];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px"; canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (e) => { pointer.tx = e.clientX; pointer.ty = e.clientY; pointer.seen = true; };
    const touch = (e) => { if (e.touches?.[0]) move(e.touches[0]); };
    const leave = () => { pointer.seen = false; pointer.tx = -1000; pointer.ty = -1000; };
    const draw = (time) => {
      if (disposed || !active) return;
      ctx.clearRect(0, 0, width, height);
      const t = time * .001;
      if (!pointer.seen) {
        pointer.tx = width * (.5 + Math.sin(t * .22) * .22);
        pointer.ty = height * (.48 + Math.cos(t * .3) * .2);
      }
      pointer.x += (pointer.tx - pointer.x) * .22;
      pointer.y += (pointer.ty - pointer.y) * .22;
      let x = pointer.x, y = pointer.y;
      trails.forEach((p, i) => {
        const target = i === 0 ? pointer : trails[i - 1];
        p.vx += (target.x - p.x) * (.12 - i * .002) - p.vx * .16;
        p.vy += (target.y - p.y) * (.12 - i * .002) - p.vy * .16;
        p.x += p.vx; p.y += p.vy;
        const alpha = (1 - i / trails.length) * (pointer.seen ? .48 : .19);
        ctx.beginPath(); ctx.fillStyle = "rgba(" + colors[p.hue] + "," + alpha + ")";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        if (i > 0) {
          ctx.beginPath(); ctx.strokeStyle = "rgba(" + colors[p.hue] + "," + alpha * .25 + ")";
          ctx.lineWidth = .7; ctx.moveTo(p.x, p.y); ctx.lineTo(target.x, target.y); ctx.stroke();
        }
      });
      motes.forEach((p) => {
        const px = p.x + Math.sin(t * p.speed + p.phase) * 15;
        const py = p.y + Math.cos(t * p.speed * .8 + p.phase) * 15;
        ctx.beginPath(); ctx.fillStyle = "rgba(" + colors[p.hue] + ",.28)";
        ctx.arc(px, py, p.radius, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    const start = () => { if (disposed || active) return; active = true; canvas.style.display = "block"; raf = requestAnimationFrame(draw); window.dispatchEvent(new CustomEvent("swarmline:state", { detail: { active: true } })); };
    const stop = (remove = false) => { active = false; cancelAnimationFrame(raf); ctx.clearRect(0, 0, width, height); canvas.style.display = "none"; window.dispatchEvent(new CustomEvent("swarmline:state", { detail: { active: false } })); if (remove) canvas.remove(); };
    const toggle = (event) => event.detail?.active ? start() : stop();
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("touchstart", touch, { passive: true });
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("pointerleave", leave);
    window.addEventListener("swarmline:toggle", toggle);
    window.__swarmline = { start, stop };
    raf = requestAnimationFrame(draw);
    window.dispatchEvent(new CustomEvent("swarmline:state", { detail: { active: true } }));
    return () => {
      disposed = true; cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("touchstart", touch);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("swarmline:toggle", toggle);
      delete window.__swarmline;
      canvas.remove();
    };
  }, []);
  return null;
}
export default SwarmMotion;
