'use client';
import { useState } from 'react';

const LINKS = {
  github: 'https://github.com/VarshaHemakumar',
  linkedin: 'https://www.linkedin.com/in/varsha-hemakumar/', 
  email: 'shavarsha02@gmail.com',
};

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-black">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.4-3.9-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.11-.76.41-1.27.75-1.56-2.57-.29-5.28-1.28-5.28-5.71 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.79 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.58.24 2.74.12 3.03.74.81 1.19 1.85 1.19 3.11 0 4.44-2.72 5.41-5.31 5.7.42.37.8 1.1.8 2.23v3.3c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-black">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5.001 2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM14.5 9c-2.33 0-3.5 1.28-4 2.18V9H6v12h4.5v-6.5c0-1.72 1.12-2.5 2.38-2.5 1.2 0 2.12.77 2.12 2.49V21H19v-6.96C19 10.43 16.98 9 14.5 9z"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4">
      <path fill="currentColor" d="M5 12h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function OpenToWorkBadge() {
  return (
    <div className="relative mx-auto md:mx-0 h-40 w-40">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full badge-spin">
        <defs>
          <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
        </defs>
        <text fontSize="16" fill="white">
          <textPath href="#circlePath" startOffset="0%">
            CONTACT • CONNECT • CONTACT • CONNECT • CONTACT •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-2xl">
        ★
      </div>
      <div className="absolute inset-0 rounded-full ring-1 ring-white/25" />
      <style jsx>{`
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        .badge-spin { animation: spinSlow 18s linear infinite; }
      `}</style>
    </div>
  );
}

export default function EmailSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      window.prompt('Copy email:', LINKS.email);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      {}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_20%,rgba(0,0,0,.35),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-[1fr,10rem]">
          {}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white/85">FROM CONCEPT TO </span>
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">CREATION</span>
              <br />
              <span className="text-white/85">LET&apos;S MAKE IT </span>
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">HAPPEN!</span>
            </h2>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-white text-black px-6 py-3 font-semibold shadow-xl ring-1 ring-black/5 hover:translate-y-[-1px] hover:shadow-2xl active:translate-y-0 transition"
              >
                Get In Touch <IconArrow />
              </a>

              {}
              <div className="flex items-center gap-2">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <IconGitHub />
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-black hover:scale-105 transition"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <IconLinkedIn />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-10 items-center rounded-full border border-white/20 px-4 text-white/80 hover:bg-white/10 transition"
                  title="Copy email"
                >
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>
            </div>

            <p className="mt-8 text-xl font-semibold text-white/90">
              I&apos;m available for full-time roles.
            </p>
            <p className="mt-2 text-white/65">
              
            </p>
          </div>

          {}
          <div className="order-first md:order-none flex items-start justify-center md:justify-end">
            <OpenToWorkBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
