import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";


export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background image with zoom effect */}
      <Image
        src="/Images/hero.jpeg"  
        alt="Background with cherry blossoms"
        fill
        className={styles.image}
        priority
      />

      {}
      <div className={styles.overlay} />

      {}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Varsha&nbsp;Hemakumar</h1>
        <p className={styles.subtitle}>ML &amp; AI Engineer</p>
        <p className={styles.description}>
          Designing and building end‑to‑end AI products across NLP, computer vision,
          recommendation systems &amp; beyond.
        </p>
        <div className={styles.scrollDown}>
          
        </div>
      </div>
    </section>
  );
}
