import styles from './reward_item.module.css';

interface RewardItemProps {
  name: string;
  icon: string;
  playersPercent: number;
}

export default function RewardItem({ name, icon, playersPercent }: RewardItemProps) {
  return (
    <div className={styles.rewardCard}>
      <div className={styles.rewardIcon}>{icon}</div>
      <div className={styles.rewardInfo}>
        <span className={styles.rewardName}>{name}</span>
        <span className={styles.playersPercent}>{playersPercent}% игроков</span>
      </div>
    </div>
  );
}