'use client';
import React, { useEffect, useRef } from 'react';

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

function cleanTitle(title = '') {
  return title.replace(/^[^/]+\/\s*/, '');
}

function GridCard({ item }) {
  const ref = useReveal();
  const title = cleanTitle(item.title);
  const description = item.description || 'Open-source project';
  const tags = item.tags || [];

  return (
    <a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="reveal group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1f2e]/80 to-[#151520]/80 p-6 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-[4px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:border-violet-400/40"
    >
      <h3 className="bg-gradient-to-r from-violet-400 via-pink-400 to-sky-400 bg-clip-text text-lg md:text-xl font-bold text-transparent">
        {title}
      </h3>

      <p className="mt-3 text-[1rem] leading-relaxed text-white/85">
        {description}
      </p>

      {!!tags.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                border border-white/15
                bg-gradient-to-r from-violet-600/40 to-fuchsia-600/40
                text-white/90 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all group-hover:ring-violet-400/40" />

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .reveal-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </a>
  );
}

export default function ProjectsGrid({ items, title = 'All Projects', sub }) {
  return (
    <section className="relative py-14 md:py-20" id="projects">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
          {title}
        </h1>
        {sub && (
          <p className="mt-2 text-center text-white/60 text-base md:text-lg">
            {sub}
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((it) => (
            <GridCard key={it.href ?? it.title} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
