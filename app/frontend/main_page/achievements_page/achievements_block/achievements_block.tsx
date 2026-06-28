import AchievementsList from './achievements_list/achievements_list';
import styles from './achievements_block.module.css';

export default function AchievementsBlock() {
  return (
    <div className={styles.achievementsBlock}>
      <h2 className={styles.sectionTitle}>Все достижения</h2>
      <AchievementsList />
    </div>
  );
}