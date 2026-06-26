import RecentRewards from './recent_rewards/recent_rewards';
import styles from './rewards_block.module.css';

export default function RewardsBlock() {
  return (
    <div className={styles.rewardsBlock}>
      <h2 className={styles.sectionTitle}>Награды</h2>
      <RecentRewards />
    </div>
  );
}