'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './HeroSection.module.scss';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.hero}>
      {}
      <Image
        src="/Images/hero.jpeg"
        alt="Background with cherry blossoms"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />

      {}
      <div className={styles.overlay} />

      {}
      <header className={styles.navBar}>
        <div className={styles.navInner}>
          <a href="/" className={styles.brand}>Varsha</a>

          {}
          <nav className={styles.links}>
            <ul className={styles.navList}>
              {NAV.map(i => (
                <li key={i.href}><a href={i.href}>{i.label}</a></li>
              ))}
            </ul>
          </nav>

          {}
          <button
            className={styles.menuButton}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={20} />
          </button>
        </div>

        {}
        {open && (
          <div className={styles.mobileMenu}>
            <button
              className={styles.closeButton}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <ul className={styles.mobileList}>
              {NAV.map(i => (
                <li key={i.href}>
                  <a href={i.href} onClick={() => setOpen(false)}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* hero content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Varsha&nbsp;Hemakumar</h1>
        <p className={styles.subtitle}>ML &amp; AI Engineer</p>
        <p className={styles.description}>
          Designing and building end-to-end AI products across NLP, computer vision,
          recommendation systems &amp; beyond.
        </p>
        <div className={styles.scrollDown} />
      </div>
    </section>
  );
}
