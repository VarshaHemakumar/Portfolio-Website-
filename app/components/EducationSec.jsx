'use client';
import Image from "next/image";

import React from 'react';


const SCHOOLS = [
  {
    period: '2024–2026',
    name: 'University at Buffalo',
    degree: 'M.S., Computer Science & Engineering',
    location: 'Buffalo, NY, USA',
    logo: '/Images/ub-logo.svg',
    banner: '/Images/ub.jpg',
    coursework: [
      'Algorithms Analysis & Design',
      'Computer Security',
      'Intro to Machine Learning',
      'Deep Learning',
      'Computer Vision & Image Processing',
      'Data Intensive Computing',
      'Operating Systems',
      'Data Models & Query Languages',
      'Intro to Entrepreneurship',
    ],
  },
  {
    period: '2020–2024',
    name: 'SSN College of Engineering',
    degree: 'B.Tech, Information Technology',
    location: 'Chennai, India',
    logo: '/Images/ssn-logo.png',
    banner: '/Images/ssn.jpg',
    coursework: [
      'Data Structures & Algorithms',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
      'Software Engineering',
    ],
  },
   {
    period: '2021-2023',
    name: 'Indian Institute of Technology Madras',
    degree: 'Diploma in Data Science',
    location: 'Chennai, India',
    banner: '/Images/iitm.jpeg',
    coursework: [
      'Tools for Data Science',
      'Statistics for Data Science',
      'Machine Learning Techniques ',
      'Business Analytics',
      'Business Data Management',
    
    ],
  },
];


function SkillBar({ name, level }) {
  return (
    <div className="min-w-[10rem] flex-1">
      <div className="flex items-center justify-between text-[0.8rem] text-white/80 mb-1">
        <span className="font-semibold">{name}</span>
        <span className="text-white/60">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function SchoolCard({ s }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
      {/* Banner */}
      <div className="relative h-44 md:h-56 overflow-hidden">
        {s.banner && (
          <img
            src={s.banner}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
        {/* overlays for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,.35),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Header text over banner */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-4 md:px-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-extrabold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] truncate">
                  {s.name}
                </h3>
                <p className="text-white/90 font-semibold truncate">{s.degree}</p>
                <p className="text-white/60 text-sm">{s.location}</p>
              </div>
              <span className="shrink-0 rounded-full bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 px-3 py-1 text-xs font-bold text-white shadow-[0_10px_24px_rgba(139,92,246,0.35)] ring-1 ring-white/20">
                {s.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Skill Showcase */}
        {s.skills?.length > 0 && (
          <>
            <div className="mb-3 text-white/80 text-sm font-semibold">Skill showcase</div>
            <div className="grid gap-3 md:grid-cols-2">
              {s.skills.map((sk) => (
                <SkillBar key={sk.name} name={sk.name} level={sk.level} />
              ))}
            </div>
          </>
        )}

        {/* Coursework chips */}
        {s.coursework?.length > 0 && (
          <>
            <div className="mt-6 mb-2 text-white/80 text-sm font-semibold">Selected coursework</div>
            <div className="flex flex-wrap gap-2">
              {s.coursework.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default function EducationSec() {
  return (
    <section id="education" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(180deg,#c084fc99,#8b5cf699,#38bdf899)]">
          Education
        </h2>

        {}
        <div className="mt-8 space-y-10">
          {SCHOOLS.map((s) => (
            <SchoolCard key={s.name} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
