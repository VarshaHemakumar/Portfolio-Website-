'use client';
import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; r: number; vy: number; vx: number; a: number };

export default function Starfield({
  density = 0.00025,   
  maxSize = 1.0,       
  minSize = 0.4,
  speed = 10,         
  drift = 12,         
  fade = 0.9,          
  color = '255,255,255', 
}: {
  density?: number;
  maxSize?: number;
  minSize?: number;
  speed?: number;
  drift?: number;
  fade?: number;
  color?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext('2d', { alpha: true })!;
    let stars: Star[] = [];
    let width = 0, height = 0, dpr = 1;
    let last = performance.now();
    let reduced = false;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduced = mq.matches;
    const onMQ = (e: MediaQueryListEvent) => { reduced = e.matches; };
    mq.addEventListener?.('change', onMQ);

    const resize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      width = window.innerWidth;
      height = window.innerHeight;
      c.width = Math.floor(width * dpr);
      c.height = Math.floor(height * dpr);
      c.style.width = `${width}px`;
      c.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      
      const targetCount = Math.floor(width * height * density);
      stars = Array.from({ length: targetCount }, () => seedStar());
    };

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function seedStar(y?: number): Star {
      return {
        x: Math.random() * width,
        y: y ?? Math.random() * height,
        r: rand(minSize, maxSize),
        vy: rand(speed * 0.6, speed * 1.4), 
        vx: rand(-drift, drift),            
        a: rand(0.2, 0.9),                 
      };
    }

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000); 
      last = now;

     
      ctx.fillStyle = `rgba(0,0,0,${1 - fade})`;
      ctx.fillRect(0, 0, width, height);

     
      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        
        s.y += s.vy * dt;
        s.x += s.vx * dt;

      
        if (s.y - s.r > height) {
          stars[i] = seedStar(-s.r); 
          continue;
        }
        if (s.x < -5) s.x = width + 5;
        else if (s.x > width + 5) s.x = -5;

        ctx.moveTo(s.x + s.r, s.y);
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      }
      ctx.fillStyle = `rgba(${color}, 0.9)`;
      ctx.fill();

      if (!reduced) raf.current = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener('resize', resize);

   
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, c.width, c.height);
    if (!reduced) raf.current = requestAnimationFrame(step);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
      mq.removeEventListener?.('change', onMQ);
    };
  }, [density, maxSize, minSize, speed, drift, fade, color]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
