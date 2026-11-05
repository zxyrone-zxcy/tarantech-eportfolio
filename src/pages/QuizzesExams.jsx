import { useOutletContext } from 'react-router-dom'
import { quizzesData } from '../data/members'
import styles from './SharedPage.module.css'

export default function QuizzesExams() {
  const { member } = useOutletContext()
  const data = quizzesData[member.id] ?? { quizzes: [], exams: [] }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Quizzes &amp; Exams</h2>
        <p className={styles.pageDesc}>
          All quiz and examination scores for ITC309-301I across Prelims, Midterm, and Final terms.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Quizzes</h3>
        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Term</th>
                <th className={styles.numeric}>Score</th>
                <th className={styles.numeric}>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.quizzes.map((q, i) => (
                <tr key={i}>
                  <td>{q.title}</td>
                  <td className={styles.muted}>{q.term}</td>
                  <td className={`${styles.numeric} ${styles.score}`}>{q.score}</td>
                  <td className={`${styles.numeric} ${styles.muted}`}>{q.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Examinations</h3>
        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Exam</th>
                <th>Date</th>
                <th className={styles.numeric}>Score</th>
                <th className={styles.numeric}>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.exams.map((e, i) => (
                <tr key={i}>
                  <td>{e.title}</td>
                  <td className={styles.muted}>{e.date}</td>
                  <td className={`${styles.numeric} ${styles.score}`}>{e.score}</td>
                  <td className={`${styles.numeric} ${styles.muted}`}>{e.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className={styles.hint}>
        Replace the placeholder scores with actual grades once available.
      </p>
    </div>
  )
}
