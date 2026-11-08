import React, { useEffect, useRef, useState } from "react";

const AGENTS = [
  { label: "LAYOUT", color: "#ff5968", phase: 0.2, speed: 1.0 },
  { label: "TYPE", color: "#f4c46b", phase: 1.8, speed: 0.82 },
  { label: "DETAIL", color: "#86c8b8", phase: 3.1, speed: 1.16 },
  { label: "IMAGE", color: "#a99af5", phase: 4.5, speed: 0.92 }
];

function SwarmMotion() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleToggle = (event) => setActive(Boolean(event.detail?.active));
    window.addEventListener("swarmline:toggle", handleToggle);
    return () => window.removeEventListener("swarmline:toggle", handleToggle);
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const trails = AGENTS.map(() => []);
    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawCursor = (x, y, color, label) => {
      context.save();
      context.translate(x, y);
      context.fillStyle = color;
      context.strokeStyle = "rgba(9,9,9,.9)";
      context.lineWidth = 1.4;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, 22);
      context.lineTo(6, 16);
      context.lineTo(11, 27);
      context.lineTo(15, 25);
      context.lineTo(10, 14);
      context.lineTo(19, 14);
      context.closePath();
      context.fill();
      context.stroke();
      context.font = "700 9px Manrope, sans-serif";
      const labelWidth = context.measureText(label).width + 14;
      context.fillStyle = color;
      context.fillRect(14, 18, labelWidth, 17);
      context.fillStyle = "#090909";
      context.fillText(label, 21, 30);
      context.restore();
    };

    const render = (time) => {
      context.clearRect(0, 0, width, height);
      AGENTS.forEach((agent, index) => {
        const t = reducedMotion ? agent.phase : time * 0.00034 * agent.speed + agent.phase;
        const x = width * (0.5 + 0.34 * Math.sin(t * (0.78 + index * 0.035)) + 0.08 * Math.sin(t * 1.7 + index));
        const y = height * (0.5 + 0.31 * Math.cos(t * (0.63 + index * 0.04)) + 0.07 * Math.sin(t * 1.23 + index * 1.4));
        const trail = trails[index];
        if (!reducedMotion) {
          trail.push({ x, y });
          if (trail.length > 18) trail.shift();
          if (trail.length > 1) {
            context.beginPath();
            trail.forEach((point, pointIndex) => {
              if (pointIndex === 0) context.moveTo(point.x, point.y);
              else context.lineTo(point.x, point.y);
            });
            context.strokeStyle = agent.color + "75";
            context.lineWidth = 1.3;
            context.stroke();
          }
        }
        context.strokeStyle = agent.color + "88";
        context.lineWidth = 1;
        context.beginPath();
        context.arc(x + 7, y + 8, 19 + index * 2, 0, Math.PI * 2);
        context.stroke();
        drawCursor(x, y, agent.color, agent.label);
      });
    };

    const tick = (time) => {
      render(time);
      if (!reducedMotion) frame = window.requestAnimationFrame(tick);
    };

    resize();
    tick(performance.now());
    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      context.clearRect(0, 0, width, height);
    };
  }, [active]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="swarm-canvas" aria-hidden="true" />;
}

export default SwarmMotion;