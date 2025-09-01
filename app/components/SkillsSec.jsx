import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJava,
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faAngular,
  faGitAlt,
  faDocker,
  faRProject,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import styles from './SkillsSec.module.scss';


export default function SkillsSec() {
  const skills = [
    { icon: faPython, label: 'Python' },
    { icon: faJava, label: 'Java' },
    { icon: faJs, label: 'JavaScript' },
    { icon: faReact, label: 'React' },
    { icon: faAngular, label: 'Angular' },
    { icon: faNodeJs, label: 'Node.js' },
    { icon: faHtml5, label: 'HTML5' },
    { icon: faCss3, label: 'CSS3 / SCSS' },
    { icon: faDatabase, label: 'SQL' },
    { icon: faRProject, label: 'R' },
    { icon: faDocker, label: 'Docker' },
    { icon: faGitAlt, label: 'Git' },
    { icon: faCode, label: 'Algorithms' },
    { icon: faCubesStacked, label: 'Data Structures' },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skills.map(({ icon, label }) => (
          <div key={label} className={styles.skillCard}>
            <FontAwesomeIcon icon={icon} size="2x" className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
