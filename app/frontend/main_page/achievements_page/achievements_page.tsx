import RewardsBlock from './rewards_block/rewards_block';
import GiftsBlock from './gifts_block/gifts_block';
import AchievementsBlock from './achievements_block/achievements_block';
import styles from './achievements_page.module.css';

export default function AchievementsPage() {
  return (
    <div className={styles.achievementsContainer}>
      {/* Левая колонка: награды и подарки */}
      <div className={styles.leftColumn}>
        <RewardsBlock />
        <GiftsBlock />
      </div>

      {/* Правая колонка: все достижения */}
      <div className={styles.rightColumn}>
        <AchievementsBlock />
      </div>
    </div>
  );
}