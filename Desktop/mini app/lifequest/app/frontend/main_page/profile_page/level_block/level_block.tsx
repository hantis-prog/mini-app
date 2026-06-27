import styles from './level_block.module.css';

export default function LevelBlock() {
  return (
    <div className={styles.levelBlock}>
      <div className={styles.levelHeader}>
        <span className={styles.levelIcon}>🏆</span>
        <div className={styles.levelInfo}>
          <h3 className={styles.levelTitle}>Уровень 0</h3>
          <span className={styles.levelName}>Новичок</span>
        </div>
      </div>
      <div className={styles.ratingBar}>
        <div className={styles.ratingFill} style={{ width: '0%' }} />
      </div>
      <div className={styles.ratingText}>
        <span>Рейтинг</span>
        <span className={styles.ratingValue}>0 / 12000</span>
      </div>
    </div>
  );
}