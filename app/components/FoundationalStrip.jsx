'use client';
import React from "react";
import Image from "next/image";

const GH = "VarshaHemakumar";

const IMPLEMENTATIONS = [
  {
    title: "Autoencoder for Anomaly Detection",
    subtitle: "Time-Series Reconstruction",
    blurb:
      "Encoder–decoder trained to minimize reconstruction error; thresholding used for anomaly scoring and alerts.",
    href: `https://github.com/${GH}/Autoencoder-Based-Anomaly-Detection-for-Time-Series-Data`,
    img: `/Images/ad.jpeg`,  
    tags: ["PyTorch", "Python"],
  },
  {
    title: "LightAttention Transformer",
    subtitle: "Text Classification",
    blurb:
      "Scaled dot-product attention, positional encoding, encoder blocks, and the full training loop written by hand.",
    href: `https://github.com/${GH}/LightAttention-Transformer-from-Scratch`,
    img: `/Images/transformer.jpeg`,  
    tags: ["PyTorch", "Python"],
  },
];

function Tile({ item, reverse = false }) {
  return (
    <a
      className={`f-tile ${reverse ? "f-tile--reverse" : ""}`}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.title} — open GitHub repo`}
    >
      {}
      <div className="f-thumb">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 860px) 92vw, 36vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <div className="f-thumbMask" />
      </div>

      {}
      <div className="f-body">
        <div className="f-titles">
          <h3 className="f-title">{item.title}</h3>
          {item.subtitle && <p className="f-sub">{item.subtitle}</p>}
        </div>

        <p className="f-blurb">{item.blurb}</p>

        <div className="f-tags">
          {item.tags?.map((t) => (
            <span key={t} className="f-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* --- Card --- */
        .f-tile {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          min-width: clamp(520px, 52vw, 760px);
          max-width: 760px;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.38);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .f-tile--reverse { flex-direction: row-reverse; }
        .f-tile:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
        }

        /* --- Image --- */
        .f-thumb {
          position: relative;
          flex: 0 0 36%;
          min-height: 170px;
          background: #0a0c11;
          overflow: hidden;
        }
        .f-thumbMask {
          position: absolute;
          inset: 0;
          background: radial-gradient(120% 160% at 20% 0%, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.35) 60%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35));
        }

        /* --- Body --- */
        .f-body {
          flex: 1 1 auto;
          padding: 1rem 1.2rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.7rem;
        }
        .f-title {
          margin: 0;
          font-weight: 900;
          font-size: clamp(1.1rem, 1.8vw, 1.6rem);
        }
        .f-sub {
          margin: 0.2rem 0 0.45rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(235, 235, 245, 0.9);
        }
        .f-blurb {
          margin: 0 0 0.9rem;
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(235, 235, 245, 0.88);
        }

        /* --- Tags --- */
        .f-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .f-tag {
          font-size: 0.78rem; 
          font-weight: 700;
          padding: 0.28rem 0.7rem;
          border-radius: 999px;
          color: #ececf3;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: linear-gradient(90deg, rgba(184,146,255,0.16), rgba(96,165,250,0.16));
        }

        /* --- Mobile --- */
        @media (max-width: 860px) {
          .f-tile,
          .f-tile--reverse { flex-direction: column; }
          .f-thumb {
            flex-basis: auto;
            min-height: 150px;
            max-height: 250px;
          }
          .f-body { padding: 0.9rem 1rem; }
          .f-tile { min-width: 92vw; }
        }
      `}</style>
    </a>
  );
}

export default function FoundationalStrip({ items = IMPLEMENTATIONS }) {
  const seq = [...items, ...items];

  return (
    <section className="f-section">
      <div className="f-headwrap">
        <h2 className="f-titleH">Foundational ML/DL Implementations</h2>
        <p className="f-desc">
          Core algorithms I coded to understand the math and training dynamics — simple, rigorous, and extensible.
        </p>
      </div>

      {/* contained marquee */}
      <div className="f-bleed">
        <div className="f-marquee">
          <div className="f-track">
            {seq.map((it, i) => (
              <Tile key={`${it.title}-${i}`} item={it} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .f-section { padding: 4rem 0 3rem; }
        .f-headwrap {
          max-width: 1000px;
          margin: 0 auto 1.25rem;
          padding: 0 1.25rem;
          text-align: center;
        }
        .f-titleH {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 400;
          background: linear-gradient(180deg, #c084fc99, #8b5cf699, #38bdf899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .f-desc {
          color: rgba(235,235,245,0.75);
          font-size: 1rem;
        }
        .f-bleed {
          max-width: 1800px;
          margin: 0 auto;
          padding-top: 1rem;
        }
        .f-marquee {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%);
        }
        @keyframes f-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .f-track {
          display: flex;
          gap: 2rem;
          padding: 0 1.5rem 1rem;
          width: max-content;
          animation: f-scroll 42s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
