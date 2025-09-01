'use client';
import React from 'react';

const EXPERIENCE = [
  {
    period: 'May 2025 – Jul 2025',
    org: 'Springer Capital',
    role: 'AI & Data Science Intern',
    location: 'Remote, USA',
    bullets: [
      'Ran in-depth EDA across 50+ real-world email & chat datasets to assess structure and labeling.',
      'Produced a consolidated report on dataset usefulness for multi-class sentiment classification.',
      'Defined labeling schemas and led dataset selection for downstream model development.',
    ],
  },
  {
    period: 'Mar 2024 – May 2024',
    org: 'Ohm Clouds',
    role: 'Machine Learning Intern',
    location: 'Chennai, India',
    bullets: [
      'Evaluated recommendation algorithms (collaborative filtering, content-based) to improve personalization.',
      'Compiled performance analyses and identified best-fit algorithms for implementation.',
    ],
  },
  {
    period: 'Jun 2023 – Jul 2023',
    org: 'Team Tweaks Technology',
    role: 'Android Developer Intern',
    location: 'Chennai, Tamil Nadu, India · On-site',
    bullets: [
      'Completed a two-week internship gaining practical exposure to Android development with Java and Android Studio.',
      'Observed the full app development lifecycle, including testing procedures and delivery practices.',
      'Contributed to fundamental tasks and documented learnings about the Android development environment.',
    ],
  },
  {
    period: 'Apr 2023 – Jul 2023',
    org: 'Vayusastra — IIT Madras',
    role: 'Internet of Things Intern',
    location: 'Chennai, India',
    bullets: [
      'Completed IoT training; built a Smart Bin using Adafruit, MQTT, IFTTT & Blynk.',
      'Implemented voice-command waste segregation with end-to-end connectivity.',
    ],
  },
];

function Dot() {
  return (
    <span className="relative z-10 inline-block h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_18px_4px_rgba(139,92,246,0.55)]" />
  );
}

function Card({ item, side = 'left' }) {
  return (
    <div
      className={`relative grid items-center gap-6 md:gap-10 ${
        side === 'left' ? 'md:grid-cols-[1fr_10rem]' : 'md:grid-cols-[10rem_1fr]'
      }`}
    >
      {side === 'left' && (
        <div className="order-2 md:order-1">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.35)] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-extrabold text-white">{item.org}</h3>
            <p className="mt-1 text-white/85 font-semibold">
              {item.role}
              <span className="text-white/50 font-normal"> · {item.location}</span>
            </p>
            <ul className="mt-3 space-y-2 text-white/80 leading-relaxed text-[0.96rem]">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="order-1 md:order-2 flex flex-col items-center justify-center">
        <Dot />
        <span className="mt-3 rounded-full bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 px-3 py-1 text-xs font-bold text-white shadow-[0_10px_24px_rgba(139,92,246,0.35)] ring-1 ring-white/20">
          {item.period}
        </span>
      </div>

      {side === 'right' && (
        <div className="order-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.35)] p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-extrabold text-white">{item.org}</h3>
            <p className="mt-1 text-white/85 font-semibold">
              {item.role}
              <span className="text-white/50 font-normal"> · {item.location}</span>
            </p>
            <ul className="mt-3 space-y-2 text-white/80 leading-relaxed text-[0.96rem]">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExperienceSec() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(180deg,#c084fc99,#8b5cf699,#38bdf899)]">
          Experience
        </h2>
      </div>

      <div className="relative mx-auto mt-8 max-w-5xl px-6">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/70 via-violet-500/10 to-transparent md:block" />

        <div className="space-y-12 md:space-y-14">
          {EXPERIENCE.map((item, i) => (
            <Card key={i} item={item} side={i % 2 === 0 ? 'left' : 'right'} />
          ))}
        </div>
      </div>
    </section>
  );
}
