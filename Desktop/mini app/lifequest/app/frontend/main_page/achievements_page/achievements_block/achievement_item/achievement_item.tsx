import styles from './achievement_item.module.css';

interface AchievementItemProps {
  name: string;
  description: string;
  playersPercent: number;
  unlocked: boolean;
}

export default function AchievementItem({
  name,
  description,
  playersPercent,
  unlocked,
}: AchievementItemProps) {
  return (
    <div className={`${styles.achievementCard} ${unlocked ? styles.unlocked : styles.locked}`}>
      <div className={styles.achievementInfo}>
        <h3 className={styles.achievementName}>{name}</h3>
        <p className={styles.achievementDescription}>{description}</p>
      </div>
      <div className={styles.playersInfo}>
        <span className={styles.playersPercent}>есть у {playersPercent}% игроков</span>
      </div>
    </div>
  );
}