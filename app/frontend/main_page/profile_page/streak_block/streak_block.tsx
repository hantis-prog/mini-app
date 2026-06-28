import styles from './streak_block.module.css';

export default function StreakBlock() {
  return (
    <div className={styles.streakBlock}>
      <div className={styles.streakIcon}>🔥</div>
      <div className={styles.streakInfo}>
        <h3 className={styles.streakTitle}>Серия</h3>
        <span className={styles.streakValue}>0 дней</span>
      </div>
    </div>
  );
}