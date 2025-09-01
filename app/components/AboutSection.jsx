import React from "react";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const headlineWords = [
    "I’m",
    "a",
    "versatile",
    "ML & AI Engineer",
    "who",
    "turns",
    "ideas",
    "into",
    "powerful",
    "products.",
  ];

  const RESUME_URL = encodeURI("/Images/Resume Varsha H .pdf");
  const FILE_NAME = "Varsha_Hemakumar_Resume.pdf";

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <span className={styles.sectionTitle}>About me</span>

        <h2 className={styles.headline}>
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className={`${styles.word} ${
                word === "ML & AI Engineer" ? styles.highlight : ""
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Centered CTA row */}
        <div className={styles.ctaCenter}>
          <a
            href={RESUME_URL}
            download={FILE_NAME}
            className={`${styles.btn} ${styles.btnPrimary}`}
            aria-label="Download résumé PDF"
          >
            <span>Download Resume</span>
           
              
           
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btn} ${styles.btnGhost}`}
            aria-label="View résumé PDF in a new tab"
          >
            <span>View PDF</span>
            
             
           
          </a>
        </div>

        <p className={styles.description}>
          Leveraging expertise in machine learning, deep learning and full-stack
          development, I build end-to-end AI solutions across natural language
          processing, computer vision, and recommender systems. From architecting
          models to deploying them in production, I ensure clear interfaces,
          robust decision-making and fast execution.
        </p>
      </div>
    </section>
  );
}
