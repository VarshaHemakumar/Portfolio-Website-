
"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChartLine, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import styles from './SkillsCarousel.module.scss';


export default function SkillsCarousel() {
  const slides = [
    {
      title: 'AI & Machine Learning',
      description:
        'Specialising in designing, training and deploying machine learning models for real‑world applications.',
      items: [
        'Python with PyTorch & TensorFlow',
        'Deep Learning (CNNs, RNNs)',
        'Machine Learning Algorithms',
        'Scikit‑Learn & XGBoost',
      ],
      color: '#7F5AF0',
      icon: faBrain,
    },
    {
      title: 'Data Engineering & Analysis',
      description:
        'Transforming raw data into actionable insights and building scalable data pipelines.',
      items: [
        'SQL & PostgreSQL',
        'Pandas & NumPy',
        'Spark & Hadoop',
        'Tableau & Power BI',
      ],
      color: '#5468FF',
      icon: faChartLine,
    },
    {
      title: 'Full‑Stack Development',
      description:
        'Developing end‑to‑end solutions from APIs to responsive UIs with modern frameworks.',
      items: [
        'Flask, Django & FastAPI',
        'Node.js & Express',
        'React & Next.js',
        'Docker & Git',
      ],
      color: '#3DDC97',
      icon: faLaptopCode,
    },
  ];

  const [current, setCurrent] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.leftSide}>
        <h2 className={styles.heading}>Skills & Expertise</h2>
        <p className={styles.intro}>
          My journey in technology spans across machine learning, data engineering and full‑stack
          development. Here are some of the areas where I excel:
        </p>
      </div>
      <div className={styles.rightSide}>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`${styles.panel} ${index === current ? styles.active : ''}`}
            style={{ borderLeftColor: slide.color }}
          >
            <div className={styles.iconWrapper} style={{ backgroundColor: slide.color }}>
              <FontAwesomeIcon icon={slide.icon} size="lg" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.panelTitle}>{slide.title}</h3>
              <p className={styles.panelDesc}>{slide.description}</p>
              <ul className={styles.list}>
                {slide.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Show ${slides[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
