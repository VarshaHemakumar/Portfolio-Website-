'use client';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { PROJECTS, sortByPriority } from '../data/resumeProjects';

function ProjectCard({ p }) {
  return (
    <a className="ps-card" href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} — open on GitHub`}>
      <div className="ps-media"><img src={p.img} alt="" loading="lazy" /><div className="ps-mask" /></div>
      <div className="ps-body">
        <h3 className="ps-title">{p.title}</h3>
        {p.desc && <p className="ps-desc">{p.desc}</p>}
        <div className="ps-tags">{p.tags?.map(t => <span key={t} className="ps-tag">{t}</span>)}</div>
      </div>
      <style jsx>{`
        .ps-card{display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.12);
          background:linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.03));
          border-radius:20px;overflow:hidden;text-decoration:none;color:inherit;
          box-shadow:0 12px 30px rgba(0,0,0,.4);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;
          min-height:420px}
        .ps-card:hover{transform:translateY(-4px);box-shadow:0 18px 42px rgba(0,0,0,.5);border-color:rgba(255,255,255,.2)}
        .ps-media{position:relative;aspect-ratio:16/9}
        .ps-media img{width:100%;height:100%;object-fit:cover;display:block}
        .ps-mask{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,.22) 100%)}
        .ps-body{padding:14px 16px 16px;display:grid;gap:10px}
        .ps-title{margin:0;font-weight:800;font-size:1.05rem}
        .ps-desc{margin:0;color:rgba(235,235,245,.85);font-size:.95rem;line-height:1.45}
        .ps-tags{display:flex;gap:.45rem;flex-wrap:wrap}
        .ps-tag{font-size:.72rem;font-weight:700;padding:.26rem .6rem;border-radius:999px;border:1px solid rgba(255,255,255,.2);
          background:linear-gradient(90deg,rgba(184,146,255,.16),rgba(96,165,250,.16));color:#ececf3}
      `}</style>
    </a>
  );
}

export default function ProjectSection() {
  const visible = useMemo(() => sortByPriority(PROJECTS).slice(0, 6), []);

  return (
    <section className="ps-wrap">
      <div className="ps-head">
        <h2 className="ps-titleH">Projects</h2>
        <p className="ps-sub">A selection of my ML/DL builds, research experiments, and frontend utilities.</p>
      </div>

      <div className="ps-bleed">
        <div className="ps-grid">
          {visible.map(p => <ProjectCard key={p.repo} p={p} />)}
        </div>
        <div className="ps-cta">
          <Link href="/projects" className="ps-more">See all projects →</Link>
        </div>
      </div>

      <style jsx>{`
        .ps-wrap{padding:3rem 0 2.5rem}
        .ps-head{max-width:1200px;margin:0 auto 1.25rem;padding:0 1.25rem;text-align:center}
        .ps-titleH{ text-align:center;font-size:2.5rem;font-weight:400;
          background:linear-gradient(180deg,#c084fc99,#8b5cf699,#38bdf899);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .ps-sub{color:rgba(235,235,245,.75);font-size:1rem;margin:0}

        .ps-bleed{width:100vw;margin-left:50%;transform:translateX(-50%);padding:0 2rem}
        .ps-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;align-items:stretch;max-width:1200px;margin:0 auto}
        @media (max-width:1024px){.ps-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:860px}}
        @media (max-width:640px){.ps-grid{grid-template-columns:1fr;max-width:640px}.ps-bleed{padding:0 1rem}}

        .ps-cta{display:flex;justify-content:center;margin-top:20px}
        .ps-more{display:inline-block;text-decoration:none;padding:.78rem 1.25rem;border-radius:999px;font-weight:800;font-size:.98rem;color:#000;background:#fff}
      `}</style>
    </section>
  );
}
