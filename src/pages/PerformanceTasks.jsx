import { useOutletContext } from 'react-router-dom'
import { performanceTasksData } from '../data/members'
import styles from './SharedPage.module.css'

export default function PerformanceTasks() {
  const { member } = useOutletContext()
  const tasks = performanceTasksData[member.id] ?? []

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Performance Tasks</h2>
        <p className={styles.pageDesc}>
          Graded performance tasks completed throughout the semester for ITC309-301I.
        </p>
      </div>

      <div className={styles.card}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Date / Period</th>
              <th className={styles.numeric}>Score</th>
              <th className={styles.numeric}>Max</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((row, i) => (
              <tr key={i}>
                <td>{row.task}</td>
                <td className={styles.muted}>{row.date}</td>
                <td className={`${styles.numeric} ${styles.score}`}>{row.score}</td>
                <td className={`${styles.numeric} ${styles.muted}`}>{row.maxScore}</td>
                <td className={styles.muted}>{row.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.hint}>
        Replace the placeholder scores with actual grades once available.
      </p>
    </div>
  )
}
