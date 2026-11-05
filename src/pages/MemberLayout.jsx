import { NavLink, Outlet, useParams, Navigate } from 'react-router-dom'
import { getMember } from '../data/members'
import styles from './MemberLayout.module.css'

export default function MemberLayout() {
  const { memberId } = useParams()
  const member = getMember(memberId)

  if (!member) return <Navigate to="/" replace />

  const tabs = [
    { label: 'Performance Tasks', path: 'performance-tasks' },
    { label: 'Quizzes & Exams', path: 'quizzes' },
    { label: 'Reflection', path: 'reflection' },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.memberHeader}>
        <div className={styles.avatarSmall}>
          {member.photo ? (
            <img src={member.photo} alt={member.name} className={styles.avatarImg} />
          ) : (
            <span className={styles.avatarInitials}>{member.initials}</span>
          )}
        </div>
        <div>
          <h1 className={styles.name}>{member.name}</h1>
          <p className={styles.sub}>ITC309-301I · Presentation Skills for IT</p>
        </div>
      </div>

      <nav className={styles.tabs}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      <main className={styles.content}>
        <Outlet context={{ member }} />
      </main>
    </div>
  )
}
