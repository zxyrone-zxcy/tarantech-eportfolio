import { Link } from 'react-router-dom'
import styles from './MemberCard.module.css'

export default function MemberCard({ member }) {
  return (
    <Link to={`/members/${member.id}/performance-tasks`} className={styles.card}>
      <div className={styles.photoWrap}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className={styles.photo}
          />
        ) : (
          <div className={styles.avatar}>
            <span className={styles.initials}>{member.initials}</span>
          </div>
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{member.name}</p>
        <p className={styles.sub}>ITC309-301I · View Portfolio</p>
      </div>
    </Link>
  )
}
