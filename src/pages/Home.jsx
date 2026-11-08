import { useState } from 'react'
import { Link } from 'react-router-dom'
import geraldPhoto from '../assets/GeraldE-cutout.png'
import xyronePhoto from '../assets/XyroneZ-cutout.png'
import keithPhoto from '../assets/KeithS-cutout.png'
import mattPhoto from '../assets/MattM-cutout.png'
import styles from './Home.module.css'

const heroPeople = [
  { id: 'gerald', name: 'Gerald', photo: geraldPhoto, imageClass: styles.geraldImage, zoneClass: styles.geraldZone },
  { id: 'keith', name: 'Keith', photo: keithPhoto, imageClass: styles.keithImage, zoneClass: styles.keithZone },
  { id: 'xyrone', name: 'Xyrone', photo: xyronePhoto, imageClass: styles.xyroneImage, zoneClass: styles.xyroneZone },
  { id: 'matt', name: 'Matt', photo: mattPhoto, imageClass: styles.mattImage, zoneClass: styles.mattZone },
]


export default function Home() {
  const [activePortrait, setActivePortrait] = useState(null)

  return (
    <main className={styles.main}>

      {/* ── Full-viewport hero ──────────────────────────── */}
      <section className={styles.hero}>

        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>Presentation Skills for IT · ITC309-301I</span>
          </div>

          <h1 className={styles.headline}>
            E-portfolio for
            <br />
            <span className={styles.accentWord}>the GANG.</span>
          </h1>

          <p className={styles.desc}>
            A curated group e-portfolio of academic work, performance tasks,
            assessments, and personal reflections from a full semester of learning.
          </p>

          <div className={styles.ctas}>
            <Link
              to="/members/xyrone/performance-tasks"
              className={styles.ctaPrimary}
            >
              Explore Portfolios ↓
            </Link>
            <span className={styles.ctaHint}>← Hover the team to explore</span>
          </div>
        </div>

        {/* Right: individually aligned portraits reveal color on hover */}
        <div className={styles.rightCol}>
          <div className={styles.photoStack}>
            {heroPeople.map((person) => (
              <img
                key={person.id}
                src={person.photo}
                className={`${styles.personImage} ${person.imageClass} ${activePortrait === person.id ? styles.personColor : ''}`}
                alt=""
                aria-hidden="true"
              />
            ))}

            {heroPeople.map((person) => (
              <Link
                key={person.id}
                to={`/members/${person.id}/performance-tasks`}
                className={`${styles.zone} ${person.zoneClass}`}
                aria-label={`Go to ${person.name}'s portfolio`}
                onPointerEnter={() => setActivePortrait(person.id)}
                onPointerLeave={() => setActivePortrait(null)}
                onFocus={() => setActivePortrait(person.id)}
                onBlur={() => setActivePortrait(null)}
              >
                <span className={styles.zoneName}>{person.name}</span>
              </Link>
            ))}

            {/* Hover instruction — fades out once user interacts */}
            <div
              className={`${styles.hoverHint} ${activePortrait !== null ? styles.hoverHintHidden : ''}`}
              aria-hidden="true"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 9-7 1-4 7-3-17z"/>
              </svg>
              Hover to explore
            </div>

            {/* Smooth left-edge blend into page bg */}
            <div className={styles.edgeFade} aria-hidden="true" />
          </div>

          <p className={styles.cornerLabel}>Group ePortfolio / 2024</p>
        </div>
      </section>

    </main>
  )
}
