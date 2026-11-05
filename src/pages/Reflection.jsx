import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import styles from './SharedPage.module.css'
import reflStyles from './Reflection.module.css'

const TERMS = [
  { key: 'prelims', label: 'Prelims' },
  { key: 'midterm', label: 'Midterm' },
  { key: 'finalterm', label: 'Final Term' },
]

export default function Reflection() {
  const { member } = useOutletContext()
  const [active, setActive] = useState('prelims')

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Reflection</h2>
        <p className={styles.pageDesc}>
          Personal reflections on learning and growth throughout each academic period.
        </p>
      </div>

      <div className={reflStyles.termTabs}>
        {TERMS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={active === t.key ? `${reflStyles.termTab} ${reflStyles.termTabActive}` : reflStyles.termTab}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={styles.card}>
        <div className={reflStyles.reflectionBody}>
          <p className={reflStyles.termLabel}>
            {TERMS.find((t) => t.key === active)?.label} Reflection
          </p>
          <p className={reflStyles.reflectionText}>
            {member.reflection[active]}
          </p>
        </div>
      </div>
    </div>
  )
}
