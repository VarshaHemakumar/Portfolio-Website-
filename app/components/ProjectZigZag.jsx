'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
const TILE_H = 'h-[320px] md:h-[360px]'; 

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && el.classList.add('reveal-in'),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur-sm">
      {children}
    </span>
  );
}



function ImageCard({ cover, alt }) {
  const onErr = (e) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.parentElement?.classList.add(
      'bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,.25),transparent_40%)]'
    );
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_12px_30px_rgba(0,0,0,0.35)] ${TILE_H}`}>
      <Image
        src={cover}
        alt={alt ?? ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
        onError={onErr}
        priority={false}
      />

      {}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,.25),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background:
            'radial-gradient(420px 220px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.06), transparent 60%)',
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
        }}
      />
    </div>
  );
}


function DescriptionCard({ p }) {
  
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      title={`Open ${p.title} on GitHub`}
      className={`rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.35)] h-[320px] md:h-[360px] flex transition hover:scale-[1.01] hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-violet-400/60`}
    >
      {}
      <div className="p-5 md:p-6 overflow-y-auto w-full">
        <h3 className="text-lg md:text-xl font-extrabold text-white">{p.title}</h3>
        {p.subtitle && <p className="mt-1 text-white/90 font-semibold">{p.subtitle}</p>}

        {p.bullets?.length ? (
          <ul className="mt-3 space-y-2.5 text-white/85 text-[0.95rem] leading-relaxed">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : p.desc ? (
          <p className="mt-3 text-white/85">{p.desc}</p>
        ) : null}

        {!!p.tags?.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white/85 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {}
      </div>
    </a>
  );
}


export default function ProjectZigZag({ items, title = 'Projects', sub, ctaHref }) {
  return (
    <section id="projects" className="relative py-12 md:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(180deg,#c084fc99,#8b5cf699,#38bdf899)]">
          {title}
        </h2>
        {sub && <p className="mt-2 text-center text-white/70">{sub}</p>}

        <div className="mt-8 space-y-10">
          {items.map((p, i) => {
            const reverse = i % 2 === 1;
            const ref = useReveal();
            return (
              <div
                key={p.title}
                ref={ref}
                className={`reveal grid grid-cols-1 md:grid-cols-2 items-stretch gap-5 md:gap-8`}
              >
                <div className={`${reverse ? 'md:order-2' : 'md:order-1'}`}>
                  <ImageCard cover={p.cover} alt={p.title} />
                </div>
                <div className={`${reverse ? 'md:order-1' : 'md:order-2'}`}>
                  <DescriptionCard p={p} />
                </div>
              </div>
            );
          })}
        </div>

        {ctaHref && (
          <div className="mt-10 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 px-5 py-3 font-bold text-white shadow-[0_10px_24px_rgba(139,92,246,0.35)] transition hover:-translate-y-px hover:shadow-2xl"
            >
              See all projects
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M5 12h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {}
      <style jsx global>{`
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .5s ease, transform .5s ease; }
        .reveal-in { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
}
