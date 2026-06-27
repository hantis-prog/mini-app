import styles from './goal_block.module.css';

export default function GoalBlock() {
  return (
    <div className={styles.goalBlock}>
      <h3 className={styles.goalTitle}>Персональная цель</h3>
      <div className={styles.goalContent}>
        <p className={styles.goalText}>
          Достичь 50 уровня и получить достижение "Легенда"
        </p>
        <span className={styles.goalStatus}>🎯</span>
      </div>
    </div>
  );
}