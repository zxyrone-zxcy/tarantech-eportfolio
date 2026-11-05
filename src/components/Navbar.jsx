import { NavLink, Link } from 'react-router-dom'
import { members } from '../data/members'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>

      {/* Logo */}
      <Link to="/" className={styles.brand}>
        <span className={styles.logoBox}>e.</span>
        <span className={styles.brandName}>E-Portfolio</span>
      </Link>

      {/* Centre navigation */}
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Home
        </NavLink>
        {members.map((m) => (
          <NavLink
            key={m.id}
            to={`/members/${m.id}/performance-tasks`}
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
          >
            {m.shortName}
          </NavLink>
        ))}
      </nav>

      {/* Right badge */}
      <div className={styles.right}>
        <span className={styles.badge}>ITC309-301I</span>
      </div>

    </header>
  )
}
